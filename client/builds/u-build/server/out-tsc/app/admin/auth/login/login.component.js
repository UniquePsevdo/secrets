"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var authentication_1 = require("../../../authentication");
var LoginComponent = (function () {
    function LoginComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.signInForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    ;
    LoginComponent.prototype.onSubmit = function () {
        /*this.authService.login(this.signInForm.value, 'admin')*/
        this.authenticationService.login(this.signInForm.value)
            .subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ;
    return LoginComponent;
}());
LoginComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-login',
                templateUrl: 'login.component.html',
                styleUrls: ['login.component.scss']
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = function () { return [
    { type: authentication_1.AuthenticationService, },
]; };
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map