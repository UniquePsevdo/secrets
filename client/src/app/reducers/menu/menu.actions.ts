import {CustomAction} from '../custom.action';


export const ROUTE_TO = '[Menu] ROUTE_TO';
export const SET_IS_MAIN_PAGE = '[Menu] SET_IS_MAIN_PAGE';
export const SET_NAV_PARAMS = '[Menu] SET_NAV_PARAMS';

export class routeTo implements CustomAction {
    readonly type = ROUTE_TO;
    constructor (public payload: any){}
}

export class setNavParams implements CustomAction {
    readonly type = SET_NAV_PARAMS;
    constructor (public payload: any){}
}

export class setIsMainPage implements CustomAction {
    readonly type = SET_IS_MAIN_PAGE;
    constructor (public payload: any){}
}

/* The action classes will be added here once they are defined */
export type MenuActions = routeTo | setIsMainPage | setNavParams;
