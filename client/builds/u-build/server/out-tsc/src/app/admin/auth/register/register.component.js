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
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router, router_1.ActivatedRoute, error_service_1.ErrorService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map