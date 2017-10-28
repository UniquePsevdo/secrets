"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var nav_service_1 = require("../nav-service/nav-service");
var HomeComponent = (function () {
    function HomeComponent(translate, navigationService) {
        this.translate = translate;
        this.navigationService = navigationService;
        this.user = {
            name: 'Arthur',
            age: 42
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToNavParams = function (navParams) {
        this.navigationService.goToNavParams(navParams);
    };
    /*{path: 'showroom/:name', component: ShowroomComponent},
    {path: 'brand/:name', component: CabinetComponent},
    {path: 'events/:name', component: EventsComponent},*/
    HomeComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    return HomeComponent;
}());
HomeComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = function () { return [
    { type: core_2.TranslateService, },
    { type: nav_service_1.NavigationService, },
]; };
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map