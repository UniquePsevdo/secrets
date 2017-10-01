import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../../reducers/index';
import {AdminInteractionData} from "../../data-services/admin-interaction-data";

@Component({
    selector: 'app-cabinet-form',
    templateUrl: './cabinet-form.component.html',
    styleUrls: ['./cabinet-form.component.scss']
})
export class CabinetFormComponent implements OnInit, OnDestroy {
    routerSubscription: Subscription;

    constructor(private store: Store<fromRoot.AppState>, private dataService: AdminInteractionData) {
        this.routerSubscription = this.store.select(fromRoot.getResetState).subscribe((state) => {
            if (state['start'] === false) {
                this.dataService.setShowContentChildren(true);
            }
        })
    }

    ngOnInit() {
    }

    ngOnDestroy(){
        if(this.routerSubscription){
            this.routerSubscription.unsubscribe()
        }
    }


}
