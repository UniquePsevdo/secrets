import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers/index';
import * as langActions from '../reducers/language/lang.actions';
import * as menuActions from '../reducers/menu/menu.actions';
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Globals} from "../../globals/globals";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
    languages: any[];
    currentLang: string ;
    defaultIsCurrentLocale: any;
    langStateSubscription: Subscription;
    menuSubscription: Subscription;
    /*observer: any;*/
    navParams: any;
    isBurgerActive: boolean;

    /*@ViewChild('burgerRef')
    private burgerRef: ElementRef;*/

    constructor(private store: Store<fromRoot.AppState>,
                private http: HttpClient,
                private translate: TranslateService,
                private router: Router,
                private route: ActivatedRoute,
                private globals: Globals) {
        this.defaultIsCurrentLocale = 'initial';
        this.languages = [];
        this.currentLang = '';
    }

    ngOnInit() {
        this.langStateSubscription = this.store.select(fromRoot.getLanguageState).subscribe((state) => {
            if (state["languages"].length>0 === true && state["currentLang"] !== '') {
                this.languages = state["languages"];
                if (this.currentLang !== state["currentLang"]) {
                    this.currentLang = state["currentLang"];
                    let defaultIsCurrent = false;
                    for (let i = 0; i < this.languages.length; i++) {
                        if (this.languages[i].is_default === 1 && this.currentLang === this.languages[i].code) {
                            defaultIsCurrent = true;
                            break;
                        }
                    }

                    if(this.defaultIsCurrentLocale.toString() !== defaultIsCurrent.toString()){
                        this.defaultIsCurrentLocale = defaultIsCurrent;
                        this.store.dispatch(new langActions.setIsDefaultCurrent(defaultIsCurrent));
                    }
                }
            }
        });
    }

    ngAfterViewInit() {
        this.menuSubscription = this.store.select(fromRoot.getMenuState).subscribe((state) => {
            if (state["navParams"]["parent"] !== "") {
                if (JSON.stringify(this.navParams) !== JSON.stringify(state["navParams"])) {
                    this.navParams = state["navParams"];
                    this.goToNavParams(this.navParams);
                    return;
                }else{
                    //from byhmc
                    // $('.header .nav-burger').hasClass('active') ? $('.header .nav-burger').trigger('click') : '';
                }
            }else{
                if(this.navParams){
                    if(this.navParams.parent!==''){
                        this.goHome(null);
                    }
                }
                this.navParams = state["navParams"];
            }
        });
    }

    setCurrentLanguage(lang: string) {
        this.store.dispatch(new langActions.setCurrentLang(lang));
    }

    goHome(event) {
        if(event){
            event.preventDefault();
        }
        //from byhmc
        //$('.header .nav-burger').hasClass('active') ? $('.header .nav-burger').trigger('click') : '';
        let url = this.defaultIsCurrentLocale ? '' : this.currentLang;
        this.router.navigate([url]);
        this.store.dispatch(new menuActions.setNavParams({parent:"", children:[]}));
    }

    goToNavParams(navParams: any) {
        this.router.navigate([((this.defaultIsCurrentLocale ? '':this.currentLang + '/') + navParams.parent), ...navParams.children]).then(() => {
            //from byhmc
            //$('.header .nav-burger').hasClass('active') ? $('.header .nav-burger').trigger('click') : '';
        });
    }

    ngOnDestroy() {
        this.langStateSubscription.unsubscribe();
        this.menuSubscription.unsubscribe();
    }
}
