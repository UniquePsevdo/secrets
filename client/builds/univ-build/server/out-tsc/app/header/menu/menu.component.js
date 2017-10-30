"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var fromRoot = require("../../reducers/index");
var menuActions = require("../../reducers/menu/menu.actions");
var nav_service_1 = require("../../nav-service/nav-service");
var MenuComponent = (function () {
    function MenuComponent(store, navigationService, router) {
        this.store = store;
        this.navigationService = navigationService;
        this.router = router;
        this.menuItemsArray = [
            { "title": "Home", parent: "", children: [] },
            { "title": "Admin", parent: "admin", children: [] }
        ];
        this.navParams = { parent: '', children: [] };
        this.router = router;
    }
    MenuComponent.prototype.languagesHasLocale = function (lang) {
        for (var i = 0; i < this.languages.length; i++) {
            if (this.languages[i].code === lang) {
                return true;
            }
        }
        return false;
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.langStateSubscription = this.store.select(fromRoot.getLanguageState).subscribe(function (state) {
            _this.languages = state["languages"];
            if (state["IsDefaultCurrent"] !== 'initial') {
                _this.defaultIsCurrentLocale = state["IsDefaultCurrent"];
            }
        });
        this.menuStateSubscription = this.store.select(fromRoot.getMenuState).subscribe(function (state) {
            //try to comment after onRouteChange
            if (state["navParams"]) {
                _this.navParams = state["navParams"];
            }
        });
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.routeSubscriber = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var baseUrlArr = _this.router.url.indexOf('?') > -1 ? _this.router.url.split('?')[0].split('/') : _this.router.url.split('/');
                var path = baseUrlArr.filter(function (item) {
                    if (item === "" || _this.languagesHasLocale(item)) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }).join("/");
                if (path.indexOf('/') > -1) {
                    var pathArr = path.split('/');
                    var parent_1 = pathArr[0];
                    var children = pathArr.slice(1, pathArr.length);
                    var navParams = { parent: parent_1, children: children };
                    if (JSON.stringify(navParams) !== JSON.stringify(_this.navParams)) {
                        _this.store.dispatch(new menuActions.setNavParams({ parent: parent_1, children: children }));
                    }
                }
                else {
                    var navParams = { parent: (path ? path : ""), children: [] };
                    if (JSON.stringify(navParams) !== JSON.stringify(_this.navParams)) {
                        _this.store.dispatch(new menuActions.setNavParams(navParams));
                    }
                }
                var isMainPage = void 0;
                if (_this.navParams.parent === '' && _this.navParams.children.length === 0) {
                    isMainPage = true;
                }
                else {
                    isMainPage = false;
                }
                _this.store.dispatch(new menuActions.setIsMainPage(isMainPage));
                /*
                // from byhmc
                if(isMainPage){
                    $('body').removeClass('h_auto');
                }else{
                    $('body').addClass('h_auto');
                }*/
                /*$(window).scrollTop(0);*/ //todo: need to find solution with scroll top
            }
        });
    };
    MenuComponent.prototype.isSubmenuCurrent = function (parentMenuName, subMenuName) {
        if (this.navParams.children) {
            if (parentMenuName === this.navParams.parent && subMenuName === this.navParams.children[0] || (subMenuName === '' && this.navParams.children.length === 0)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    MenuComponent.prototype.goToNavParams = function (navParams) {
        this.navigationService.goToNavParams(navParams);
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.langStateSubscription.unsubscribe();
        this.menuStateSubscription.unsubscribe();
        this.routeSubscriber.unsubscribe();
    };
    /*private menuItemsArray: any[] = [
        {"title":"Electricity","link":"#"},
        {"title":"Mobile Bill","link":"#"},
        {"title":"Home and Kitchen","link":"#",
            "subItems":[
                {"title":"Furniture","link":"#"},
                {"title":"Cookware","link":"#"},
            ]
        },
        {"title":"Car and Bike Accessories","link":"#",
            "subItems":[
                {"title":"Tyres and Alloys","link":"#"},
                {"title":"Comfort and Safety","link":"#"},
            ]
        },
    ];*/
    MenuComponent.prototype.onMenuClose = function () {
        console.log("menu closed");
    };
    MenuComponent.prototype.onMenuOpen = function () {
        console.log("menu Opened");
    };
    MenuComponent.prototype.onItemSelect = function (item) {
        this.navigationService.goToNavParams({ parent: item.parent, children: item.children });
    };
    return MenuComponent;
}());
MenuComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            },] },
];
/** @nocollapse */
MenuComponent.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: nav_service_1.NavigationService, },
    { type: router_1.Router, },
]; };
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map