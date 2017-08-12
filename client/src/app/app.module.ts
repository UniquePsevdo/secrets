import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, Http, RequestOptions, Response} from '@angular/http';
import {AuthConfig} from 'angular2-jwt';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {SignupComponent} from './admin/auth/signup/signup.component';
import {SigninComponent} from './admin/auth/signin/signin.component';
import {JwtHttp, JwtConfigService} from "angular2-jwt-refresh";

import {environment} from '../environments/environment';

import {AdminHttpRequests} from "./admin/admin-http-requests";
import {ErrorService} from "./errors/error.service";

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent,
        PageNotFoundComponent,
        AdminContentComponent,
        SignupComponent,
        SigninComponent,
        ErrorsComponent
    ],
    imports: [
        BrowserModule, HttpModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule,
        AppRoutingModule
    ],
    providers: [AuthService, AuthGuard, AdminHttpRequests, ErrorService,{
        provide: JwtHttp,
        useFactory: getJwtHttp,
        deps: [Http, RequestOptions]
    }],
    bootstrap: [AppComponent]
})
export class AppModule {}

export function getJwtHttp(http: Http, options: RequestOptions) {
    let jwtOptions = {
        endPoint: `${environment.apiUrl}${environment.refresh_endpoint}`,
        // optional
        payload: {type: 'refresh'},
        beforeSeconds: 15,          // refresh token before 10 min
        tokenName: 'refresh_token',
        refreshTokenGetter: (() => localStorage.getItem('refresh_token')),
        tokenSetter: ((res: Response): boolean | Promise<void> => {
            res = res.json();
            if (!res['token'] || !res['refresh_token']) {
                localStorage.removeItem('token');
                localStorage.removeItem('refresh_token');
                return false;
            }
            localStorage.setItem('token', res['token']);
            localStorage.setItem('refresh_token', res['refresh_token']);
            return true;
        })
    };
    let authConfig = new AuthConfig({
        noJwtError: true,
        globalHeaders: [{'Accept': 'application/json'}],
        tokenGetter: (() => localStorage.getItem('token')),
    });

    return new JwtHttp(
        new JwtConfigService(jwtOptions, authConfig),
        http,
        options
    );
}