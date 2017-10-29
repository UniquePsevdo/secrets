"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../authentication/authentication.service");
var store_1 = require("@ngrx/store");
var fromRoot = require("../reducers/index");
var admin_interaction_data_1 = require("./data-services/admin-interaction-data");
var nav_service_1 = require("../nav-service/nav-service");
var AdminComponent = (function () {
    function AdminComponent(store, dataService, authenticationService, navigationService) {
        var _this = this;
        this.store = store;
        this.dataService = dataService;
        this.authenticationService = authenticationService;
        this.navigationService = navigationService;
        this.routerSubscription = this.store.select(fromRoot.getResetState).subscribe(function (state) {
            if (state['start'] === false) {
                //this.dataService.setShowContentChildren(false);
                _this.childContentSubscription = _this.dataService.showContentChildren$.subscribe(function (data) {
                    _this.showContentChildren = data;
                });
                _this.menuSubscription = _this.store.select(fromRoot.getMenuState).subscribe(function (state) {
                    if (state['navParams']) {
                        if (JSON.stringify(_this.navParams) !== JSON.stringify(state['navParams'])) {
                            _this.navParams = state['navParams'];
                            if (_this.navParams.parent === 'admin' && _this.navParams.children.length === 0) {
                                _this.dataService.setShowContentChildren(false);
                            }
                        }
                    }
                });
            }
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
        if (this.childContentSubscription) {
            this.childContentSubscription.unsubscribe();
        }
    };
    AdminComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.dataService.setShowContentChildren(false);
        this.navigationService.goToNavParams({ parent: 'admin', children: [] });
    };
    return AdminComponent;
}());
AdminComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss'],
                providers: [admin_interaction_data_1.AdminInteractionData]
            },] },
];
/** @nocollapse */
AdminComponent.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: admin_interaction_data_1.AdminInteractionData, },
    { type: authentication_service_1.AuthenticationService, },
    { type: nav_service_1.NavigationService, },
]; };
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map