import {ActionReducerMap} from '@ngrx/store';

/* Import the state */
import * as fromLang from "./language/lang.reducer" ;
import * as fromMenu from "./menu/menu.reducer" ;
import * as fromReset from "./reset-router/reset.reducer" ;

export interface AppState {
    language: fromLang.State;
    menu: fromMenu.State;
    reset:fromReset.State
}

export const reducers: ActionReducerMap<AppState> = {
    language: fromLang.reducer,
    menu: fromMenu.reducer,
    reset: fromReset.reducer
};

export const getLanguageState = (state: AppState) => state.language;

export const getMenuState = (state: AppState) => state.menu;

export const getResetState = (state: AppState) => state.reset;

/*
import {ActionReducerMap} from '@ngrx/store';

/!* Import the state *!/
import * as fromLang from "./language/lang.reducer" ;
import * as fromMenu from "./menu/menu.reducer" ;
import * as fromSubscr from "./subscribe-modal/subscription.reducer" ;
import * as fromReset from "./reset-router/reset.reducer" ;


export interface AppState {
    language: fromLang.State;
    menu: fromMenu.State;
    subscribeModal: fromSubscr.State;
    reset:fromReset.State
}

export const reducers: ActionReducerMap<AppState> = {
    language: fromLang.reducer,
    menu: fromMenu.reducer,
    subscribeModal: fromSubscr.reducer,
    reset: fromReset.reducer
};


export const getLanguageState = (state: AppState) => state.language;

export const getMenuState = (state: AppState) => state.menu;

export const getSubscrModalState = (state: AppState) => state.subscribeModal;

export const getResetState = (state: AppState) => state.reset;

*/
