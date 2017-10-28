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
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    __metadata("design:paramtypes", [core_2.TranslateService, nav_service_1.NavigationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map