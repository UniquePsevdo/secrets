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
AdminComponent = __decorate([
    core_1.Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.scss'],
        providers: [admin_interaction_data_1.AdminInteractionData]
    }),
    __metadata("design:paramtypes", [store_1.Store, admin_interaction_data_1.AdminInteractionData,
        authentication_service_1.AuthenticationService, nav_service_1.NavigationService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map