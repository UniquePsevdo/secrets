"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var admin_interaction_data_1 = require("../../data-services/admin-interaction-data");
var fromRoot = require("../../../reducers/index");
var ShowroomFormComponent = (function () {
    function ShowroomFormComponent(store, dataService) {
        var _this = this;
        this.store = store;
        this.dataService = dataService;
        this.routerSubscription = this.store.select(fromRoot.getResetState).subscribe(function (state) {
            if (state['start'] === false) {
                _this.dataService.setShowContentChildren(true);
            }
        });
    }
    ShowroomFormComponent.prototype.ngOnInit = function () {
    };
    ShowroomFormComponent.prototype.ngOnDestroy = function () {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    };
    return ShowroomFormComponent;
}());
ShowroomFormComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-showroom-form',
                templateUrl: './showroom-form.component.html',
                styleUrls: ['./showroom-form.component.scss']
            },] },
];
/** @nocollapse */
ShowroomFormComponent.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: admin_interaction_data_1.AdminInteractionData, },
]; };
exports.ShowroomFormComponent = ShowroomFormComponent;
//# sourceMappingURL=showroom-form.component.js.map