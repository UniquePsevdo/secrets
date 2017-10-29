"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTE_TO = '[Menu] ROUTE_TO';
exports.SET_IS_MAIN_PAGE = '[Menu] SET_IS_MAIN_PAGE';
exports.SET_NAV_PARAMS = '[Menu] SET_NAV_PARAMS';
var routeTo = (function () {
    function routeTo(payload) {
        this.payload = payload;
        this.type = exports.ROUTE_TO;
    }
    return routeTo;
}());
exports.routeTo = routeTo;
var setNavParams = (function () {
    function setNavParams(payload) {
        this.payload = payload;
        this.type = exports.SET_NAV_PARAMS;
    }
    return setNavParams;
}());
exports.setNavParams = setNavParams;
var setIsMainPage = (function () {
    function setIsMainPage(payload) {
        this.payload = payload;
        this.type = exports.SET_IS_MAIN_PAGE;
    }
    return setIsMainPage;
}());
exports.setIsMainPage = setIsMainPage;
//# sourceMappingURL=menu.actions.js.map