import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule, MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import { AdminContentComponent } from './admin/admin-content/admin-content.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent,
        PageNotFoundComponent,
        AdminContentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MdTabsModule, MdButtonModule,
        AppRoutingModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
