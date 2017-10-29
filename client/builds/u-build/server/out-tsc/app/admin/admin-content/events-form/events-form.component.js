"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var admin_interaction_data_1 = require("../../data-services/admin-interaction-data");
var fromRoot = require("../../../reducers/index");
var EventsFormComponent = (function () {
    function EventsFormComponent(store, dataService) {
        var _this = this;
        this.store = store;
        this.dataService = dataService;
        this.routerSubscription = this.store.select(fromRoot.getResetState).subscribe(function (state) {
            if (state['start'] === false) {
                _this.dataService.setShowContentChildren(true);
            }
        });
    }
    EventsFormComponent.prototype.ngOnInit = function () {
    };
    EventsFormComponent.prototype.ngOnDestroy = function () {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    };
    return EventsFormComponent;
}());
EventsFormComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-events-form',
                templateUrl: './events-form.component.html',
                styleUrls: ['./events-form.component.scss']
            },] },
];
/** @nocollapse */
EventsFormComponent.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: admin_interaction_data_1.AdminInteractionData, },
]; };
exports.EventsFormComponent = EventsFormComponent;
//# sourceMappingURL=events-form.component.js.map