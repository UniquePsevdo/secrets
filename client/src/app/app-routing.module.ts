import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from "./admin/auth/auth-guard.service";
import {AdminContentComponent} from "./admin/admin-content/admin-content.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin',
        /*canActivate:[AuthGuard],*/
        canActivateChild: [AuthGuard],
        component: AdminComponent,
        children:[
            {path:'content', component: AdminContentComponent}
    ]},
    /*{path: 'not-found', component: PageNotFoundComponent},*/
    {path: 'not-found', component: ErrorPageComponent, data: {message: "Page not found"}},
    {path: '**', redirectTo: 'not-found'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}