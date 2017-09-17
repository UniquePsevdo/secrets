import * as language from './lang.actions';
import {environment} from "../../../environments/environment";

export interface State {
    /*
      The description of the different parts of the layout go here
     */
}

const initialState: State = {
    currentLang: '',
    languages:[],
    IsDefaultCurrent: 'initial'
};


/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
export function reducer(state = initialState, action: language.LanguageActions): State {
    if(action){
        switch (action.type) {
            case language.SET_CURRENT_LANG:
                return Object.assign({}, state, {
                    currentLang : action.payload
                });
            case language.SET_DEF_CURRENT_LANG:
                let temp;
                if(environment.envName!=='local'){
                    temp = action.payload.filter((item)=>{
                        if(item.is_default){
                            return true;
                        }else{
                            return false;
                        }
                    })[0].code;
                }
                return Object.assign({}, state, {
                    currentLang : temp || 'en'
                });
            case language.SET_LANGUAGES:
                return Object.assign({}, state, {
                    languages : action.payload
                });
            case language.SET_DEFAULT_IS_CURRENT:
                return Object.assign({}, state, {
                    IsDefaultCurrent : action.payload
                });
            default:
                return state;
        }
    }else{
        return state;
    }
}
