"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menuActions = require("../reducers/menu/menu.actions");
var store_1 = require("@ngrx/store");
var NavigationService = (function () {
    function NavigationService(store) {
        this.store = store;
    }
    NavigationService.prototype.goToNavParams = function (navParams) {
        this.store.dispatch(new menuActions.routeTo(navParams));
    };
    return NavigationService;
}());
NavigationService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
NavigationService.ctorParameters = function () { return [
    { type: store_1.Store, },
]; };
exports.NavigationService = NavigationService;
//# sourceMappingURL=nav-service.js.map