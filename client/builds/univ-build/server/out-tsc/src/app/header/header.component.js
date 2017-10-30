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
var store_1 = require("@ngrx/store");
var fromRoot = require("../reducers/index");
var langActions = require("../reducers/language/lang.actions");
var menuActions = require("../reducers/menu/menu.actions");
var http_1 = require("@angular/common/http");
var core_2 = require("@ngx-translate/core");
var router_1 = require("@angular/router");
var globals_1 = require("../../globals/globals");
var HeaderComponent = (function () {
    /*@ViewChild('burgerRef')
    private burgerRef: ElementRef;*/
    function HeaderComponent(store, http, translate, router, route, globals) {
        this.store = store;
        this.http = http;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.globals = globals;
        this.defaultIsCurrentLocale = 'initial';
        this.languages = [];
        this.currentLang = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.langStateSubscription = this.store.select(fromRoot.getLanguageState).subscribe(function (state) {
            if (state["languages"].length > 0 === true && state["currentLang"] !== '') {
                _this.languages = state["languages"];
                if (_this.currentLang !== state["currentLang"]) {
                    _this.currentLang = state["currentLang"];
                    var defaultIsCurrent = false;
                    for (var i = 0; i < _this.languages.length; i++) {
                        if (_this.languages[i].is_default === 1 && _this.currentLang === _this.languages[i].code) {
                            defaultIsCurrent = true;
                            break;
                        }
                    }
                    if (_this.defaultIsCurrentLocale.toString() !== defaultIsCurrent.toString()) {
                        _this.defaultIsCurrentLocale = defaultIsCurrent;
                        _this.store.dispatch(new langActions.setIsDefaultCurrent(defaultIsCurrent));
                    }
                }
            }
        });
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.menuSubscription = this.store.select(fromRoot.getMenuState).subscribe(function (state) {
            if (state["navParams"]["parent"] !== "") {
                if (JSON.stringify(_this.navParams) !== JSON.stringify(state["navParams"])) {
                    _this.navParams = state["navParams"];
                    _this.goToNavParams(_this.navParams);
                    return;
                }
                else {
                    //from byhmc
                    // $('.header .nav-burger').hasClass('active') ? $('.header .nav-burger').trigger('click') : '';
                }
            }
            else {
                if (_this.navParams) {
                    if (_this.navParams.parent !== '') {
                        _this.goHome(null);
                    }
                }
                _this.navParams = state["navParams"];
            }
        });
    };
    HeaderComponent.prototype.setCurrentLanguage = function (lang) {
        this.store.dispatch(new langActions.setCurrentLang(lang));
    };
    HeaderComponent.prototype.goHome = function (event) {
        if (event) {
            event.preventDefault();
        }
        //from byhmc
        //$('.header .nav-burger').hasClass('active') ? $('.header .nav-burger').trigger('click') : '';
        var url = this.defaultIsCurrentLocale ? '' : this.currentLang;
        this.router.navigate([url]);
        this.store.dispatch(new menuActions.setNavParams({ parent: "", children: [] }));
    };
    HeaderComponent.prototype.goToNavParams = function (navParams) {
        this.router.navigate([((this.defaultIsCurrentLocale ? '' : this.currentLang + '/') + navParams.parent)].concat(navParams.children)).then(function () {
            //from byhmc
            //$('.header .nav-burger').hasClass('active') ? $('.header .nav-burger').trigger('click') : '';
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.langStateSubscription.unsubscribe();
        this.menuSubscription.unsubscribe();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    }),
    __metadata("design:paramtypes", [store_1.Store,
        http_1.HttpClient,
        core_2.TranslateService,
        router_1.Router,
        router_1.ActivatedRoute,
        globals_1.Globals])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map