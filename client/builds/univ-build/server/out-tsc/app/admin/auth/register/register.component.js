"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var authentication_service_1 = require("../../../authentication/authentication.service");
var error_service_1 = require("../../../errors/error.service");
var RegisterComponent = (function () {
    function RegisterComponent(authenticationService, router, route, errorService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.errorService = errorService;
        //console.log('environment: ', environment);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.signUpForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    ;
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService.register(this.signUpForm.value)
            .subscribe(function (response) {
            console.log('response: ', response);
        }, function (data) {
            _this.errorService.handleError({ title: data.error.error, message: data.error.error });
        });
    };
    ;
    return RegisterComponent;
}());
RegisterComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            },] },
];
/** @nocollapse */
RegisterComponent.ctorParameters = function () { return [
    { type: authentication_service_1.AuthenticationService, },
    { type: router_1.Router, },
    { type: router_1.ActivatedRoute, },
    { type: error_service_1.ErrorService, },
]; };
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map