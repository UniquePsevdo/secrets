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
ShowroomFormComponent = __decorate([
    core_1.Component({
        selector: 'app-showroom-form',
        templateUrl: './showroom-form.component.html',
        styleUrls: ['./showroom-form.component.scss']
    }),
    __metadata("design:paramtypes", [store_1.Store, admin_interaction_data_1.AdminInteractionData])
], ShowroomFormComponent);
exports.ShowroomFormComponent = ShowroomFormComponent;
//# sourceMappingURL=showroom-form.component.js.map