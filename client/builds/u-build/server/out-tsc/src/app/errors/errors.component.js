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
var material_1 = require("@angular/material");
var error_service_1 = require("./error.service");
var ErrorsComponent = (function () {
    function ErrorsComponent(notification, errorService) {
        this.notification = notification;
        this.errorService = errorService;
    }
    ErrorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccured.subscribe(function (error) {
            _this.error = error;
            _this.openDialog(_this.error);
        });
    };
    ErrorsComponent.prototype.openDialog = function (error) {
        this.notification.open(error.title, error.message, {
            duration: 5000
        });
    };
    return ErrorsComponent;
}());
ErrorsComponent = __decorate([
    core_1.Component({
        selector: 'app-errors',
        templateUrl: './errors.component.html',
        styleUrls: ['./errors.component.scss']
    }),
    __metadata("design:paramtypes", [material_1.MatSnackBar, error_service_1.ErrorService])
], ErrorsComponent);
exports.ErrorsComponent = ErrorsComponent;
//# sourceMappingURL=errors.component.js.map