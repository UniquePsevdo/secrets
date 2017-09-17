import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import * as fromRoot from '../../reducers/index';
import * as menuActions from '../../reducers/menu/menu.actions';
import {NavigationService} from "../../nav-service/nav-service";

declare var $:any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {
    langStateSubscription: Subscription;
    menuStateSubscription: Subscription;
    routeSubscriber: Subscription;
    defaultIsCurrentLocale: boolean;
    navParams: any;
    languages: any[];
    window: any;

    constructor(private store: Store<fromRoot.AppState>, private navigationService : NavigationService,
                private router: Router
    ) {
        this.navParams = {parent:'', children:[]};
        this.router = router;
    }


    languagesHasLocale(lang: string) {
        for (let i = 0; i < this.languages.length; i++) {
            if(this.languages[i].code===lang){
                return true;
            }
        }
        return false;
    }

    ngOnInit() {
        this.langStateSubscription = this.store.select(fromRoot.getLanguageState).subscribe((state) => {
            this.languages = state["languages"];
            if(state["IsDefaultCurrent"]!=='initial'){
                this.defaultIsCurrentLocale = state["IsDefaultCurrent"];
            }
        });

        this.menuStateSubscription = this.store.select(fromRoot.getMenuState).subscribe((state) => {
            //try to comment after onRouteChange
            if(state["navParams"]){
                this.navParams=state["navParams"];
            }
        });
    }

    ngAfterViewInit(): void {
        this.routeSubscriber = this.router.events.subscribe((event)=>{
            if(event instanceof NavigationEnd) {
                let baseUrlArr = this.router.url.indexOf('?')>-1 ? this.router.url.split('?')[0].split('/'):this.router.url.split('/');
                let path = baseUrlArr.filter((item)=>{
                    if(item==="" || this.languagesHasLocale(item)){
                        return false;
                    }else{
                        return true;
                    }
                }).join("/");
                if(path.indexOf('/')>-1){
                    let pathArr = path.split('/');
                    let parent = pathArr[0];
                    let children = pathArr.slice(1, pathArr.length);
                    let navParams = {parent, children};
                    if(JSON.stringify(navParams)!==JSON.stringify(this.navParams)){
                        this.store.dispatch(new menuActions.setNavParams({parent, children}))
                    }
                }else{
                    let navParams = {parent : (path ? path:""), children:[]};
                    if(JSON.stringify(navParams)!==JSON.stringify(this.navParams)) {
                        this.store.dispatch(new menuActions.setNavParams(navParams));
                    }
                }

                let isMainPage;
                if(this.navParams.parent==='' && this.navParams.children.length===0){
                    isMainPage = true;
                }else{
                    isMainPage = false;
                }
                this.store.dispatch(new menuActions.setIsMainPage(isMainPage));
                /*
                // from byhmc
                if(isMainPage){
                    $('body').removeClass('h_auto');
                }else{
                    $('body').addClass('h_auto');
                }*/

                /*$(window).scrollTop(0);*/
            }
        })
    }

    isSubmenuCurrent(parentMenuName: string,subMenuName: string,){
        if(this.navParams.children){
            if(parentMenuName===this.navParams.parent&&subMenuName===this.navParams.children[0] || (subMenuName===''&&this.navParams.children.length===0)){
                return true;
            }else{
                return false;
            }
        }
    }


    goToNavParams(navParams){
        this.navigationService.goToNavParams(navParams);
    }

    ngOnDestroy() {
        this.langStateSubscription.unsubscribe();
        this.menuStateSubscription.unsubscribe();
        this.routeSubscriber.unsubscribe();
    }

}
