"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var http_3 = require("@angular/common/http");
var core_2 = require("@ngx-translate/core");
var ng_http_loader_module_1 = require("ng-http-loader/ng-http-loader.module");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./admin/admin.component");
var errors_component_1 = require("./errors/errors.component");
var home_component_1 = require("./home/home.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var register_component_1 = require("./admin/auth/register/register.component");
var login_component_1 = require("./admin/auth/login/login.component");
var index_1 = require("./reducers/index");
var admin_http_requests_1 = require("./admin/data-services/admin-http-requests");
var error_service_1 = require("./errors/error.service");
var authentication_service_1 = require("./authentication/authentication.service");
var authentication_module_1 = require("./authentication/authentication.module");
var refresh_authInterceptor_1 = require("./authentication/refresh-authInterceptor");
var spinner_component_1 = require("ng-http-loader/spinner/spinner.component");
var translate_loader_1 = require("./translate-loader");
var store_1 = require("@ngrx/store");
var base_locale_component_1 = require("./base-locale/base-locale.component");
var globals_1 = require("../globals/globals");
var header_component_1 = require("./header/header.component");
var menu_component_1 = require("./header/menu/menu.component");
var material_2 = require("@angular/material");
var nav_service_1 = require("app/nav-service/nav-service");
var cabinet_component_1 = require("./brand/cabinet/cabinet.component");
var showroom_component_1 = require("./brand/showroom/showroom.component");
var events_component_1 = require("./brand/events/events.component");
var cabinet_form_component_1 = require("./admin/admin-content/cabinet-form/cabinet-form.component");
var admin_nav_component_component_1 = require("./admin/admin-nav-component/admin-nav-component.component");
var showroom_form_component_1 = require("./admin/admin-content/showroom-form/showroom-form.component");
var events_form_component_1 = require("./admin/admin-content/events-form/events-form.component");
var angular2_image_upload_1 = require("angular2-image-upload");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            base_locale_component_1.BaseLocaleComponent,
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            menu_component_1.MenuComponent,
            admin_component_1.AdminComponent,
            home_component_1.HomeComponent,
            page_not_found_component_1.PageNotFoundComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            errors_component_1.ErrorsComponent,
            cabinet_component_1.CabinetComponent,
            showroom_component_1.ShowroomComponent,
            events_component_1.EventsComponent,
            cabinet_form_component_1.CabinetFormComponent,
            admin_nav_component_component_1.AdminNavComponentComponent,
            showroom_form_component_1.ShowroomFormComponent,
            events_form_component_1.EventsFormComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            platform_browser_1.BrowserModule.withServerTransition({
                appId: 'secrets'
            }),
            http_1.HttpModule, http_3.HttpClientModule, authentication_module_1.AuthenticationModule, ng_http_loader_module_1.NgHttpLoaderModule,
            core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useClass: translate_loader_1.CustomTranslateLoader
                }
            }),
            angular2_image_upload_1.ImageUploadModule.forRoot(),
            app_routing_module_1.AppRoutingModule,
            store_1.StoreModule.forRoot(index_1.reducers),
            animations_1.BrowserAnimationsModule,
            flex_layout_1.FlexLayoutModule,
            forms_1.ReactiveFormsModule, forms_1.FormsModule,
            material_1.MatTabsModule, material_1.MatButtonModule, material_1.MatInputModule, material_1.MatRadioModule, material_1.MatDialogModule, material_1.MatSnackBarModule, material_2.MatSelectModule, material_1.MatCardModule, material_1.MatAutocompleteModule
        ],
        entryComponents: [base_locale_component_1.BaseLocaleComponent],
        providers: [authentication_service_1.AuthenticationService,
            admin_http_requests_1.AdminHttpRequests,
            error_service_1.ErrorService,
            nav_service_1.NavigationService,
            spinner_component_1.SpinnerComponent, {
                provide: http_2.HTTP_INTERCEPTORS,
                useClass: refresh_authInterceptor_1.RefreshAuthInterceptor,
                multi: true,
            },
            globals_1.Globals
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map