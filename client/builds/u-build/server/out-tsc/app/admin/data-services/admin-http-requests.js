"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var environment_1 = require("../../../environments/environment");
var angular2_jwt_1 = require("angular2-jwt");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var error_service_1 = require("../../errors/error.service");
var AdminHttpRequests = (function () {
    function AdminHttpRequests(http, router, errorService) {
        this.http = http;
        this.router = router;
        this.errorService = errorService;
        this.requireLoginSubject = new rxjs_1.Subject();
        this.tokenIsBeingRefreshed = new rxjs_1.Subject();
        this.tokenIsBeingRefreshed.next(false);
        this.lastUrl = "/admin";
    }
    AdminHttpRequests.prototype.runRequest = function (functionName) {
        if (angular2_jwt_1.tokenNotExpired('refresh_token')) {
            return this[functionName]();
        }
        else {
            this.errorService.handleError({ title: 'Should login', message: 'Should login' });
        }
    };
    AdminHttpRequests.prototype.getAdminData = function () {
        var url = "" + environment_1.environment.apiUrl + '/test';
        return this.http.get(url)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    return AdminHttpRequests;
}());
AdminHttpRequests.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AdminHttpRequests.ctorParameters = function () { return [
    { type: http_1.HttpClient, },
    { type: router_1.Router, },
    { type: error_service_1.ErrorService, },
]; };
exports.AdminHttpRequests = AdminHttpRequests;
//# sourceMappingURL=admin-http-requests.js.map