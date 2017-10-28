"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
BaseLocaleComponent = __decorate([
    core_1.Component({
        selector: 'app-base-locale',
        templateUrl: './base-locale.component.html',
        styleUrls: ['./base-locale.component.scss']
    }),
    __metadata("design:paramtypes", [store_1.Store, router_1.Router, globals_1.Globals])
], BaseLocaleComponent);
exports.BaseLocaleComponent = BaseLocaleComponent;
//# sourceMappingURL=base-locale.component.js.map