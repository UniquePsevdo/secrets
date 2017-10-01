import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";
import {AdminInteractionData} from "../../data-services/admin-interaction-data";
import * as fromRoot from '../../../reducers/index';

@Component({
    selector: 'app-events-form',
    templateUrl: './events-form.component.html',
    styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit, OnDestroy{
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

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe()
        }
    }

}
