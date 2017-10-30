"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_auth_1 = require("ngx-auth");
var token_storage_service_1 = require("./token-storage.service");
var authentication_service_1 = require("./authentication.service");
function factory(authenticationService) {
    return authenticationService;
}
exports.factory = factory;
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [ngx_auth_1.AuthModule],
                providers: [
                    token_storage_service_1.TokenStorage,
                    authentication_service_1.AuthenticationService,
                    { provide: ngx_auth_1.PROTECTED_FALLBACK_PAGE_URI, useValue: '/admin' },
                    { provide: ngx_auth_1.PUBLIC_FALLBACK_PAGE_URI, useValue: '/admin' },
                    {
                        provide: ngx_auth_1.AUTH_SERVICE,
                        deps: [authentication_service_1.AuthenticationService],
                        useFactory: factory
                    }
                ]
            },] },
];
/** @nocollapse */
AuthenticationModule.ctorParameters = function () { return []; };
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map