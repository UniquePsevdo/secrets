"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var RefreshAuthInterceptor = (function () {
    function RefreshAuthInterceptor() {
    }
    RefreshAuthInterceptor.prototype.intercept = function (req, next) {
        if (req.url === "" + environment_1.environment["apiUrl"] + environment_1.environment["refresh_endpoint"] && localStorage.getItem('refresh_token')) {
            var authHeader = "Bearer " + localStorage.getItem('refresh_token');
            // Clone the request to add the new header.
            var authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        }
        return next.handle(req);
    };
    return RefreshAuthInterceptor;
}());
RefreshAuthInterceptor = __decorate([
    core_1.Injectable()
], RefreshAuthInterceptor);
exports.RefreshAuthInterceptor = RefreshAuthInterceptor;
//# sourceMappingURL=refresh-authInterceptor.js.map