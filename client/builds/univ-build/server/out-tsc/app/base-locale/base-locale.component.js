"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var globals_1 = require("../../globals/globals");
var BaseLocaleComponent = (function () {
    function BaseLocaleComponent(store, router, globals) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.globals = globals;
        var url = globals.currentLang + (globals.path === '' ? '' : '/' + globals.path);
        console.log('BaseLocaleComponent');
        setTimeout(function () {
            _this.router.navigate([url]);
        }, 0);
    }
    BaseLocaleComponent.prototype.ngOnInit = function () {
    };
    return BaseLocaleComponent;
}());
BaseLocaleComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-base-locale',
                templateUrl: './base-locale.component.html',
                styleUrls: ['./base-locale.component.scss']
            },] },
];
/** @nocollapse */
BaseLocaleComponent.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: router_1.Router, },
    { type: globals_1.Globals, },
]; };
exports.BaseLocaleComponent = BaseLocaleComponent;
//# sourceMappingURL=base-locale.component.js.map