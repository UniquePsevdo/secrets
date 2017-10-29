"use strict";
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
RefreshAuthInterceptor.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
RefreshAuthInterceptor.ctorParameters = function () { return []; };
exports.RefreshAuthInterceptor = RefreshAuthInterceptor;
//# sourceMappingURL=refresh-authInterceptor.js.map