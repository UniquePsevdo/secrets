"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_DEF_CURRENT_LANG = '[Lang] SET_DEF_CURRENT_LANG';
exports.GET_CURRENT_LANG = '[Lang] GET_CURRENT_LANG';
exports.SET_CURRENT_LANG = '[Lang] SET_CURRENT_LANG';
exports.SET_LANGUAGES = '[Lang] SET_LANGUAGES';
exports.SET_DEFAULT_IS_CURRENT = '[Lang] SET_DEFAULT_IS_CURRENT';
var setDefaultAsCurrentLang = (function () {
    function setDefaultAsCurrentLang(payload) {
        this.payload = payload;
        this.type = exports.SET_DEF_CURRENT_LANG;
    }
    return setDefaultAsCurrentLang;
}());
exports.setDefaultAsCurrentLang = setDefaultAsCurrentLang;
var getCurrentLang = (function () {
    function getCurrentLang() {
        this.type = exports.GET_CURRENT_LANG;
    }
    return getCurrentLang;
}());
exports.getCurrentLang = getCurrentLang;
var setCurrentLang = (function () {
    function setCurrentLang(payload) {
        this.payload = payload;
        this.type = exports.SET_CURRENT_LANG;
    }
    return setCurrentLang;
}());
exports.setCurrentLang = setCurrentLang;
var setLanguages = (function () {
    function setLanguages(payload) {
        this.payload = payload;
        this.type = exports.SET_LANGUAGES;
    }
    return setLanguages;
}());
exports.setLanguages = setLanguages;
var setIsDefaultCurrent = (function () {
    function setIsDefaultCurrent(payload) {
        this.payload = payload;
        this.type = exports.SET_DEFAULT_IS_CURRENT;
    }
    return setIsDefaultCurrent;
}());
exports.setIsDefaultCurrent = setIsDefaultCurrent;
//# sourceMappingURL=lang.actions.js.map