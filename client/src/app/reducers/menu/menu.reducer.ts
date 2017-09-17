import * as menu from './menu.actions';
import {environment} from "../../../environments/environment";

export interface State {
    /*
      The description of the different parts of the layout go here
     */
}

const initialState: State = {
    navParams:{parent:"", children:[]},
    isMainPage: true
};


/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
export function reducer(state = initialState, action: menu.MenuActions): State {
    if(action){
        switch (action.type) {
            case menu.ROUTE_TO:
                return Object.assign({}, state, {
                    navParams : action.payload
                });
            case menu.SET_NAV_PARAMS:
                return Object.assign({}, state, {
                    navParams : action.payload
                });
            case menu.SET_IS_MAIN_PAGE:
                return Object.assign({}, state, {
                    isMainPage : action.payload
                });
            default:
                return state;
        }
    }else{
        return state;
    }
}
