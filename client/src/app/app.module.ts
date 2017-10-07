import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { NgHttpLoaderModule} from 'ng-http-loader/ng-http-loader.module';
import {
    MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule, MdCardModule, MdAutocompleteModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import { ErrorsComponent } from './errors/errors.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {RegisterComponent} from './admin/auth/register/register.component';
import {LoginComponent} from './admin/auth/login/login.component';

import {environment} from '../environments/environment';
import {reducers} from "./reducers/index";

import {AdminHttpRequests} from "./admin/data-services/admin-http-requests";
import {ErrorService} from "./errors/error.service";
import {AuthenticationService} from "./authentication/authentication.service";
import {AuthenticationModule} from "./authentication/authentication.module";
import {RefreshAuthInterceptor} from "./authentication/refresh-authInterceptor";
import {SpinnerComponent} from "ng-http-loader/spinner/spinner.component";
import {CustomTranslateLoader} from "./translate-loader";
import {StoreModule} from "@ngrx/store";
import {BaseLocaleComponent} from "./base-locale/base-locale.component";
import {Globals} from "../globals/globals";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./header/menu/menu.component";
import {MdSelectModule} from '@angular/material';
import {NavigationService} from "app/nav-service/nav-service";
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { CabinetComponent } from './brand/cabinet/cabinet.component';
import { ShowroomComponent } from './brand/showroom/showroom.component';
import { EventsComponent } from './brand/events/events.component';
import { CabinetFormComponent } from './admin/admin-content/cabinet-form/cabinet-form.component';
import { AdminNavComponentComponent } from './admin/admin-nav-component/admin-nav-component.component';
import { ShowroomFormComponent } from './admin/admin-content/showroom-form/showroom-form.component';
import { EventsFormComponent } from './admin/admin-content/events-form/events-form.component';

@NgModule({
    declarations: [
        BaseLocaleComponent,
        AppComponent,
        HeaderComponent,
        MenuComponent,
        AdminComponent,
        HomeComponent,
        PageNotFoundComponent,
        RegisterComponent,
        LoginComponent,
        ErrorsComponent,
        CabinetComponent,
        ShowroomComponent,
        EventsComponent,
        CabinetFormComponent,
        AdminNavComponentComponent,
        ShowroomFormComponent,
        EventsFormComponent
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
        MdTabsModule, MdButtonModule, MdInputModule, MdRadioModule, MdDialogModule, MdSnackBarModule, MdSelectModule, SlideMenuModule, MdCardModule, MdAutocompleteModule
    ],
    entryComponents: [BaseLocaleComponent],
    providers: [AuthenticationService,
        AdminHttpRequests,
        ErrorService,
        NavigationService,
        SpinnerComponent,{
        provide: HTTP_INTERCEPTORS,
        useClass: RefreshAuthInterceptor,
        multi: true,
    },
        Globals
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
