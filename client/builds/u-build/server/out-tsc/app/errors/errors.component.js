"use strict";
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
ErrorsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-errors',
                templateUrl: './errors.component.html',
                styleUrls: ['./errors.component.scss']
            },] },
];
/** @nocollapse */
ErrorsComponent.ctorParameters = function () { return [
    { type: material_1.MatSnackBar, },
    { type: error_service_1.ErrorService, },
]; };
exports.ErrorsComponent = ErrorsComponent;
//# sourceMappingURL=errors.component.js.map