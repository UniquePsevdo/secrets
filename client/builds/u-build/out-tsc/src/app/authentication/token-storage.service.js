"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
TokenStorage = __decorate([
    core_1.Injectable()
], TokenStorage);
exports.TokenStorage = TokenStorage;
//# sourceMappingURL=token-storage.service.js.map