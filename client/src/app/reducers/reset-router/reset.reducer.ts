import * as subscribtion from './reset.actions';

export interface State {
    /*
      The description of the different parts of the layout go here
     */
}

const initialState: State = {
    start:true
};


/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
export function reducer(state = initialState, action: subscribtion.SubscriptionsActions): State {
    if(action){
        switch (action.type) {
            case subscribtion.ROUTER_START:
                return Object.assign({}, state, {
                    start : true
                });
            case subscribtion.ROUTER_END:
                return Object.assign({}, state, {
                    start : false
                });
            default:
                return state;
        }
    }else{
        return state;
    }
}
