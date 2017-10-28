import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers/index';
import {Subscription} from "rxjs/Subscription";
import {AdminInteractionData} from "./data-services/admin-interaction-data";
import {NavigationService} from "../nav-service/nav-service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    providers: [AdminInteractionData]
})

export class AdminComponent implements OnInit, OnDestroy {
    showContentChildren: boolean;
    childContentSubscription: Subscription;
    routerSubscription: Subscription;
    menuSubscription: Subscription;
    navParams: any;

    constructor(private store: Store<fromRoot.AppState>, private dataService: AdminInteractionData,
                public authenticationService: AuthenticationService, private navigationService: NavigationService) {
        this.routerSubscription = this.store.select(fromRoot.getResetState).subscribe((state) => {
            if (state['start'] === false) {
                //this.dataService.setShowContentChildren(false);
                this.childContentSubscription = this.dataService.showContentChildren$.subscribe((data) => {
                    this.showContentChildren = data;
                });

                this.menuSubscription = this.store.select(fromRoot.getMenuState).subscribe((state) => {
                    if (state['navParams']) {
                        if (JSON.stringify(this.navParams) !== JSON.stringify(state['navParams'])) {
                            this.navParams = state['navParams'];
                            if(this.navParams.parent==='admin' && this.navParams.children.length===0){
                                this.dataService.setShowContentChildren(false);
                            }
                        }
                    }
                })
            }
        })
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
        if (this.childContentSubscription) {
            this.childContentSubscription.unsubscribe();
        }
    }

    logout() {
        this.authenticationService.logout();
        this.dataService.setShowContentChildren(false);
        this.navigationService.goToNavParams({parent: 'admin', children: []});
    }
}
