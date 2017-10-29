"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var error_model_1 = require("./error.model");
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccured = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_model_1.ErrorComponent(error.title, error.message);
        this.errorOccured.emit(errorData);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;
//# sourceMappingURL=error.service.js.map