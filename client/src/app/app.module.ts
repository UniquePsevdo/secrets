import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
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
        BrowserModule, HttpModule, HttpClientModule, AuthenticationModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule,
        AppRoutingModule
    ],
    providers: [AuthService, AuthenticationService, AuthGuard, AdminHttpRequests, ErrorService, {
        provide: HTTP_INTERCEPTORS,
        useClass: RefreshAuthInterceptor,
        multi: true,
    }],
    bootstrap: [AppComponent]
})
export class AppModule {}