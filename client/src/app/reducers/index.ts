import {ActionReducerMap} from '@ngrx/store';

/* Import the state */
import * as fromLang from "./language/lang.reducer" ;
import * as fromMenu from "./menu/menu.reducer" ;

/*export interface AppState { language: fromLang.State };*/     //instead below
export interface AppState {
    language: fromLang.State;
    menu: fromMenu.State;
}

/*export const reducers = { language: fromLang.reducer };*/     //instead below
export const reducers: ActionReducerMap<AppState> = {
    language: fromLang.reducer,
    menu: fromMenu.reducer
};


export const getLanguageState = (state: AppState) => state.language;

export const getMenuState = (state: AppState) => state.menu;
