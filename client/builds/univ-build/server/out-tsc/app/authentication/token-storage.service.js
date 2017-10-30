"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var TokenStorage = (function () {
    function TokenStorage() {
    }
    /**
     * Get access token
     * @returns {Observable<string>}
     */
    TokenStorage.prototype.getAccessToken = function () {
        var token = localStorage.getItem('token');
        return Observable_1.Observable.of(token);
    };
    /**
     * Get refresh token
     * @returns {Observable<string>}
     */
    TokenStorage.prototype.getRefreshToken = function () {
        var token = localStorage.getItem('refresh_token');
        return Observable_1.Observable.of(token);
    };
    /**
     * Set access token
     * @returns {TokenStorage}
     */
    TokenStorage.prototype.setAccessToken = function (token) {
        localStorage.setItem('token', token);
        return this;
    };
    /**
     * Set refresh token
     * @returns {TokenStorage}
     */
    TokenStorage.prototype.setRefreshToken = function (token) {
        localStorage.setItem('refresh_token', token);
        return this;
    };
    /**
     * Remove tokens
     */
    TokenStorage.prototype.clear = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
    };
    return TokenStorage;
}());
TokenStorage.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TokenStorage.ctorParameters = function () { return []; };
exports.TokenStorage = TokenStorage;
//# sourceMappingURL=token-storage.service.js.map