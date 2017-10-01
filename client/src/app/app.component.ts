import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpinnerComponent} from "ng-http-loader/spinner/spinner.component";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs/Subscription";
import {Meta} from "@angular/platform-browser";
import {environment} from "../environments/environment";
import * as fromRoot from './reducers/index';
import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import * as langActions from './reducers/language/lang.actions';
import * as menuActions from './reducers/menu/menu.actions';
import * as resetActions from './reducers/reset-router/reset.actions';
import {Router} from "@angular/router";
import {Globals} from "../globals/globals";
import {childRoutesDefault} from "./routes/defaultRoutes";
import {getBaseChildRoutes} from "./routes/localeRoutes";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
    languages: any[];
    currentLang: string;
    isMainPage: boolean;
    langStateSubscription: Subscription;
    menuStateSubscription: Subscription;

    constructor(public spinnerComponent: SpinnerComponent, private translate: TranslateService, private metaService: Meta,
                private store: Store<fromRoot.AppState>, private http: HttpClient, private router: Router, private globals: Globals) {
        this.metaService.addTags([
            {charset: 'UTF-8', content: ''},
            {name: 'description', content: ''},
            {name: 'keywords', content: ''},
            {
                name: 'viewport',
                content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0'
            },
            {name: 'HandheldFriendly', content: 'true'},
            {"http-equiv": 'X-UA-Compatible', content: 'IE=edge'}
        ]);
        /*translate.setDefaultLang('ua');
        translate.use('ua');*/
        this.isMainPage = true;
        this.languages = [];
        this.currentLang = '';
    }

    ngOnInit() {
        this.langStateSubscription = this.store.select(fromRoot.getLanguageState).subscribe((state) => {
            if (state["languages"].length === 0) {
                this.http.get(`${environment.apiUrl}/locales`).subscribe((res) => {
                    this.store.dispatch(new langActions.setLanguages(res["data"]));
                    return;
                })
            } else {
                this.languages = state["languages"];
                if (state["currentLang"] === '') {
                    let lang = this.router.url.split('/')[1];
                    if (this.languagesHasLocale(lang)) {
                        this.store.dispatch(new langActions.setCurrentLang(lang));
                        return;
                    } else {
                        if (environment.envName === 'local') {
                            this.store.dispatch(new langActions.setDefaultAsCurrentLang([]));
                            return;
                        } else {
                            this.store.dispatch(new langActions.setDefaultAsCurrentLang(state["languages"]));
                            return;
                        }
                    }
                } else {
                    if (this.translate.currentLang && this.translate.currentLang !== state["currentLang"]) {
                        this.switchLanguage(state["currentLang"]);
                    } else {
                        this.translate.setDefaultLang(state["currentLang"]);
                        this.translate.use(state["currentLang"]);
                    }
                    if (this.currentLang !== state["currentLang"]) {
                        this.currentLang = state["currentLang"];
                        let defaultIsCurrent = false;
                        let defaultToCustom = true;
                        let baseUrlArr = this.router.url.indexOf('?') > -1 ? this.router.url.split('?')[0].split('/') : this.router.url.split('/');
                        let path;
                        for (let i = 0; i < this.languages.length; i++) {
                            if (this.languages[i].is_default === 1 && this.currentLang === this.languages[i].code) {
                                defaultIsCurrent = true;
                            }
                            if (baseUrlArr[1] === this.languages[i].code) {
                                defaultToCustom = false;
                            }
                        }

                        path = baseUrlArr.filter((item) => {
                            if (item === "" || this.languagesHasLocale(item)) {
                                return false;
                            } else {
                                return true;
                            }
                        }).join("/");

                        this.globals.path = path;
                        this.globals.currentLang = state["currentLang"];

                        if (path.indexOf('/') > -1) {
                            let pathArr = path.split('/');
                            let parent = pathArr[0];
                            let children = pathArr.slice(1, pathArr.length);
                            this.store.dispatch(new menuActions.setNavParams({parent, children}));
                        }
                        this.store.dispatch(new resetActions.routerStart());
                        if (defaultIsCurrent) {
                            this.router.resetConfig(childRoutesDefault);
                            this.router.navigate([path]).then((data) => {
                                this.store.dispatch(new resetActions.routerEnd());
                            });
                        } else {
                            /*let routes = getBaseChildRoutes(state["currentLang"], childRoutesDefault);
                            routes = this.getRouteComponents(routes);*/
                            this.router.resetConfig(getBaseChildRoutes(state["currentLang"], childRoutesDefault));
                            this.router.navigate([this.globals.currentLang]).then((data) => {
                                this.store.dispatch(new resetActions.routerEnd());
                            });
                        }
                    }
                }
            }
        });
        this.menuStateSubscription = this.store.select(fromRoot.getMenuState).subscribe((state) => {
            this.isMainPage = state["isMainPage"];
        });
    }

    languagesHasLocale(lang: string) {
        for (let i = 0; i < this.languages.length; i++) {
            if (this.languages[i].code === lang) {
                return true;
            }
        }
        return false;
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }

    ngOnDestroy() {
        this.langStateSubscription.unsubscribe();
        this.menuStateSubscription.unsubscribe();
    }
}