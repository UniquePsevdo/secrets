"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var environment_1 = require("../../environments/environment");
var token_storage_service_1 = require("./token-storage.service");
var AuthenticationService = (function () {
    function AuthenticationService(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
    }
    /**
     * Check, if user already authorized.
     * @description Should return Observable with true or false values
     * @returns {Observable<boolean>}
     * @memberOf AuthService
     */
    AuthenticationService.prototype.isAuthorized = function () {
        return this.tokenStorage
            .getAccessToken()
            .map(function (token) {
            return !!token;
        });
    };
    /**
     * Get access token
     * @description Should return access token in Observable from e.g.
     * localStorage
     * @returns {Observable<string>}
     */
    AuthenticationService.prototype.getAccessToken = function () {
        return this.tokenStorage.getAccessToken();
    };
    /**
     * Function, that should perform refresh token verifyTokenRequest
     * @description Should be successfully completed so interceptor
     * can execute pending requests or retry original one
     * @returns {Observable<any>}
     */
    AuthenticationService.prototype.refreshToken = function () {
        var _this = this;
        return this.tokenStorage
            .getRefreshToken()
            .switchMap(function (refreshToken) {
            return _this.http.post("" + environment_1.environment["apiUrl"] + environment_1.environment["refresh_endpoint"], { refreshToken: refreshToken });
        })
            .do(this.saveAccessData.bind(this))
            .catch(function (err) {
            _this.logout();
            return Observable_1.Observable.throw(err);
        });
    };
    AuthenticationService.prototype.isUserAuthenticated = function () {
        return localStorage.getItem('token') !== null;
    };
    /**
     * Function, checks response of failed request to determine,
     * whether token be refreshed or not.
     * @description Essentialy checks status
     * @param {Response} response
     * @returns {boolean}
     */
    AuthenticationService.prototype.refreshShouldHappen = function (response) {
        return response.status === 401;
    };
    /**
     * Verify that outgoing request is refresh-token,
     * so interceptor won't intercept this request
     * @param {string} url
     * @returns {boolean}
     */
    AuthenticationService.prototype.verifyTokenRequest = function (url) {
        return url.endsWith('/refresh');
    };
    /**
     * EXTRA AUTH METHODS
     */
    AuthenticationService.prototype.login = function (body) {
        var _this = this;
        return this.http.post("" + environment_1.environment.apiUrl + environment_1.environment.token_endpoint, body)
            .do(function (tokens) { return _this.saveAccessData(tokens); });
    };
    AuthenticationService.prototype.register = function (body) {
        return this.http.post(environment_1.environment.apiUrl + "/register", body)
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    /**
     * Logout
     */
    AuthenticationService.prototype.logout = function () {
        this.tokenStorage.clear();
        /*location.reload(true);*/
    };
    /**
     * Save access data in the storage
     *
     * @private
     * @param {AccessData} data
     */
    AuthenticationService.prototype.saveAccessData = function (_a) {
        var token = _a.token, refresh_token = _a.refresh_token;
        this.tokenStorage
            .setAccessToken(token)
            .setRefreshToken(refresh_token);
    };
    return AuthenticationService;
}());
AuthenticationService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthenticationService.ctorParameters = function () { return [
    { type: http_1.HttpClient, },
    { type: token_storage_service_1.TokenStorage, },
]; };
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map