import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgHttpLoaderModule} from 'ng-http-loader/ng-http-loader.module';
import {
    MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import { ErrorsComponent } from './errors/errors.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";

import {AdminContentComponent} from './admin/admin-content/admin-content.component';
import {RegisterComponent} from './admin/auth/register/register.component';
import {LoginComponent} from './admin/auth/login/login.component';

import {environment} from '../environments/environment';

import {AdminHttpRequests} from "./admin/admin-http-requests";
import {ErrorService} from "./errors/error.service";
import {AuthenticationService} from "./authentication/authentication.service";
import {AuthenticationModule} from "./authentication/authentication.module";
import {RefreshAuthInterceptor} from "./authentication/refresh-authInterceptor";
import {SpinnerComponent} from "ng-http-loader/spinner/spinner.component";
import {RouterModule} from '@angular/router';
import {LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings} from 'localize-router';
import {LocalizeRouterHttpLoader} from 'localize-router-http-loader';
import {routes} from './routes/routes';
import {CustomTranslateLoader} from "./translate-loader";

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent,
        PageNotFoundComponent,
        AdminContentComponent,
        RegisterComponent,
        LoginComponent,
        ErrorsComponent
    ],
    imports: [
        BrowserModule, HttpModule, HttpClientModule, AuthenticationModule, NgHttpLoaderModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: CustomTranslateLoader
            }
        }),
        LocalizeRouterModule.forRoot(routes, {
            parser: {
                provide: LocalizeParser,
                useFactory: LocalizeHttpLoaderFactory,
                deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
            }
        }),
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule,
        AppRoutingModule
    ],
    providers: [AuthService, AuthenticationService, AuthGuard, AdminHttpRequests, ErrorService, SpinnerComponent,{
        provide: HTTP_INTERCEPTORS,
        useClass: RefreshAuthInterceptor,
        multi: true,
    }],
    bootstrap: [AppComponent]
})
export class AppModule {}


export function LocalizeHttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
    return new LocalizeRouterHttpLoader(translate, location, settings, http,
        environment.envName==='local' ? '../assets/i18n/locales.json' : `${environment.apiUrl}/locales`);
}
