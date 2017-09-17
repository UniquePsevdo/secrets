import {Injectable} from '@angular/core';
import * as fromRoot from '../reducers/index';
import * as menuActions from '../reducers/menu/menu.actions';
import {Store} from "@ngrx/store";

@Injectable()
export class NavigationService{
    constructor(private store: Store<fromRoot.AppState>){
    }

    goToNavParams(navParams) {
        this.store.dispatch(new menuActions.routeTo(navParams));
    }

}
