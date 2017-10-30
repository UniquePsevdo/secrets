"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var defaultRoutes_1 = require("./routes/defaultRoutes");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    router_1.RouterModule.forRoot(defaultRoutes_1.childRoutesDefault)
                ],
                exports: [
                    router_1.RouterModule
                ]
            },] },
];
/** @nocollapse */
AppRoutingModule.ctorParameters = function () { return []; };
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map