import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule, MdDatepickerModule} from '@angular/material';
import {Routes, RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', redirectTo: "/",},
    {path: 'admin', component: AdminComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MdTabsModule, MdDatepickerModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
