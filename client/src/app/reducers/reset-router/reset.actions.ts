import {CustomAction} from '../custom.action';


export const ROUTER_START = '[Reset] ROUTER_START';
export const ROUTER_END = '[Reset] ROUTER_END';


export class routerStart implements CustomAction {
    readonly type = ROUTER_START;
}

export class routerEnd implements CustomAction {
    readonly type = ROUTER_END;
}



/* The action classes will be added here once they are defined */
export type SubscriptionsActions = routerStart | routerEnd ;
