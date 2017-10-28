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
var spinner_component_1 = require("ng-http-loader/spinner/spinner.component");
var core_2 = require("@ngx-translate/core");
var platform_browser_1 = require("@angular/platform-browser");
var environment_1 = require("../environments/environment");
var fromRoot = require("./reducers/index");
var store_1 = require("@ngrx/store");
var http_1 = require("@angular/common/http");
var langActions = require("./reducers/language/lang.actions");
var menuActions = require("./reducers/menu/menu.actions");
var resetActions = require("./reducers/reset-router/reset.actions");
var router_1 = require("@angular/router");
var globals_1 = require("../globals/globals");
var defaultRoutes_1 = require("./routes/defaultRoutes");
var localeRoutes_1 = require("./routes/localeRoutes");
var AppComponent = (function () {
    function AppComponent(spinnerComponent, translate, metaService, store, http, router, globals) {
        this.spinnerComponent = spinnerComponent;
        this.translate = translate;
        this.metaService = metaService;
        this.store = store;
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.metaService.addTags([
            { charset: 'UTF-8', content: '' },
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            {
                name: 'viewport',
                content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0'
            },
            { name: 'HandheldFriendly', content: 'true' },
            { "http-equiv": 'X-UA-Compatible', content: 'IE=edge' }
        ]);
        /*translate.setDefaultLang('ua');
        translate.use('ua');*/
        this.isMainPage = true;
        this.languages = [];
        this.currentLang = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.langStateSubscription = this.store.select(fromRoot.getLanguageState).subscribe(function (state) {
            if (state["languages"].length === 0) {
                _this.http.get(environment_1.environment.apiUrl + "/locales").subscribe(function (res) {
                    _this.store.dispatch(new langActions.setLanguages(res["data"]));
                    return;
                });
            }
            else {
                _this.languages = state["languages"];
                if (state["currentLang"] === '') {
                    var lang = _this.router.url.split('/')[1];
                    if (_this.languagesHasLocale(lang)) {
                        _this.store.dispatch(new langActions.setCurrentLang(lang));
                        return;
                    }
                    else {
                        if (environment_1.environment.envName === 'local') {
                            _this.store.dispatch(new langActions.setDefaultAsCurrentLang([]));
                            return;
                        }
                        else {
                            _this.store.dispatch(new langActions.setDefaultAsCurrentLang(state["languages"]));
                            return;
                        }
                    }
                }
                else {
                    if (_this.translate.currentLang && _this.translate.currentLang !== state["currentLang"]) {
                        _this.switchLanguage(state["currentLang"]);
                    }
                    else {
                        _this.translate.setDefaultLang(state["currentLang"]);
                        _this.translate.use(state["currentLang"]);
                    }
                    if (_this.currentLang !== state["currentLang"]) {
                        _this.currentLang = state["currentLang"];
                        var defaultIsCurrent = false;
                        var defaultToCustom = true;
                        var baseUrlArr = _this.router.url.indexOf('?') > -1 ? _this.router.url.split('?')[0].split('/') : _this.router.url.split('/');
                        var path = void 0;
                        for (var i = 0; i < _this.languages.length; i++) {
                            if (_this.languages[i].is_default === 1 && _this.currentLang === _this.languages[i].code) {
                                defaultIsCurrent = true;
                            }
                            if (baseUrlArr[1] === _this.languages[i].code) {
                                defaultToCustom = false;
                            }
                        }
                        path = baseUrlArr.filter(function (item) {
                            if (item === "" || _this.languagesHasLocale(item)) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        }).join("/");
                        _this.globals.path = path;
                        _this.globals.currentLang = state["currentLang"];
                        if (path.indexOf('/') > -1) {
                            var pathArr = path.split('/');
                            var parent_1 = pathArr[0];
                            var children = pathArr.slice(1, pathArr.length);
                            _this.store.dispatch(new menuActions.setNavParams({ parent: parent_1, children: children }));
                        }
                        _this.store.dispatch(new resetActions.routerStart());
                        if (defaultIsCurrent) {
                            _this.router.resetConfig(defaultRoutes_1.childRoutesDefault);
                            _this.router.navigate([path]).then(function (data) {
                                _this.store.dispatch(new resetActions.routerEnd());
                            });
                        }
                        else {
                            /*let routes = getBaseChildRoutes(state["currentLang"], childRoutesDefault);
                            routes = this.getRouteComponents(routes);*/
                            _this.router.resetConfig(localeRoutes_1.getBaseChildRoutes(state["currentLang"], defaultRoutes_1.childRoutesDefault));
                            _this.router.navigate([_this.globals.currentLang]).then(function (data) {
                                _this.store.dispatch(new resetActions.routerEnd());
                            });
                        }
                    }
                }
            }
        });
        this.menuStateSubscription = this.store.select(fromRoot.getMenuState).subscribe(function (state) {
            _this.isMainPage = state["isMainPage"];
        });
    };
    AppComponent.prototype.languagesHasLocale = function (lang) {
        for (var i = 0; i < this.languages.length; i++) {
            if (this.languages[i].code === lang) {
                return true;
            }
        }
        return false;
    };
    AppComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.langStateSubscription.unsubscribe();
        this.menuStateSubscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [spinner_component_1.SpinnerComponent, core_2.TranslateService, platform_browser_1.Meta,
        store_1.Store, http_1.HttpClient, router_1.Router, globals_1.Globals])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map