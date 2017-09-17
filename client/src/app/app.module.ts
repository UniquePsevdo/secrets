import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { NgHttpLoaderModule} from 'ng-http-loader/ng-http-loader.module';
import {
    MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

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
import {reducers} from "./reducers/index";

import {AdminHttpRequests} from "./admin/admin-http-requests";
import {ErrorService} from "./errors/error.service";
import {AuthenticationService} from "./authentication/authentication.service";
import {AuthenticationModule} from "./authentication/authentication.module";
import {RefreshAuthInterceptor} from "./authentication/refresh-authInterceptor";
import {SpinnerComponent} from "ng-http-loader/spinner/spinner.component";
import {RouterModule} from '@angular/router';
import {routes} from './routes/routes';
import {CustomTranslateLoader} from "./translate-loader";
import {StoreModule} from "@ngrx/store";
import {BaseLocaleComponent} from "./base-locale/base-locale.component";
import {Globals} from "../globals/globals";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./header/menu/menu.component";
import {MdSelectModule} from '@angular/material';

@NgModule({
    declarations: [
        BaseLocaleComponent,
        AppComponent,
        HeaderComponent,
        MenuComponent,
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
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule, FormsModule,
        MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule, MdSelectModule
    ],
    entryComponents: [BaseLocaleComponent],
    providers: [AuthService, AuthenticationService, AuthGuard, AdminHttpRequests, ErrorService, SpinnerComponent,{
        provide: HTTP_INTERCEPTORS,
        useClass: RefreshAuthInterceptor,
        multi: true,
    },
        Globals
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
