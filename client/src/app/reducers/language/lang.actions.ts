import {CustomAction} from '../custom.action';

export const SET_DEF_CURRENT_LANG = '[Lang] SET_DEF_CURRENT_LANG';
export const GET_CURRENT_LANG = '[Lang] GET_CURRENT_LANG';
export const SET_CURRENT_LANG = '[Lang] SET_CURRENT_LANG';
export const SET_LANGUAGES = '[Lang] SET_LANGUAGES';
export const SET_DEFAULT_IS_CURRENT = '[Lang] SET_DEFAULT_IS_CURRENT';

export class setDefaultAsCurrentLang implements CustomAction {
    readonly type = SET_DEF_CURRENT_LANG;
    constructor (public payload: any){}
}

export class getCurrentLang implements CustomAction {
    readonly type = GET_CURRENT_LANG;
}

export class setCurrentLang implements CustomAction {
    readonly type = SET_CURRENT_LANG;
    constructor (public payload: string){}
}

export class setLanguages implements CustomAction {
    readonly type = SET_LANGUAGES;
    constructor (public payload: any){}
}

export class setIsDefaultCurrent implements CustomAction {
    readonly type = SET_DEFAULT_IS_CURRENT;
    constructor (public payload: any){}
}

/* The action classes will be added here once they are defined */
export type LanguageActions = setDefaultAsCurrentLang | getCurrentLang | setCurrentLang | setLanguages | setIsDefaultCurrent;
