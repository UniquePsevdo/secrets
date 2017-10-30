"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nav_service_1 = require("../../nav-service/nav-service");
var AdminNavComponentComponent = (function () {
    function AdminNavComponentComponent(navigationService) {
        this.navigationService = navigationService;
    }
    AdminNavComponentComponent.prototype.ngOnInit = function () {
    };
    AdminNavComponentComponent.prototype.goToNavParams = function (navParams) {
        this.navigationService.goToNavParams(navParams);
    };
    return AdminNavComponentComponent;
}());
AdminNavComponentComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-admin-nav-component',
                templateUrl: './admin-nav-component.component.html',
                styleUrls: ['./admin-nav-component.component.scss']
            },] },
];
/** @nocollapse */
AdminNavComponentComponent.ctorParameters = function () { return [
    { type: nav_service_1.NavigationService, },
]; };
exports.AdminNavComponentComponent = AdminNavComponentComponent;
//# sourceMappingURL=admin-nav-component.component.js.map