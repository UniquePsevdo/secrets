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
AdminHttpRequests = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, error_service_1.ErrorService])
], AdminHttpRequests);
exports.AdminHttpRequests = AdminHttpRequests;
//# sourceMappingURL=admin-http-requests.js.map