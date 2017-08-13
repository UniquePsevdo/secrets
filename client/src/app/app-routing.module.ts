import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from "./auth-guard.service";
import {AdminContentComponent} from "./admin/admin-content/admin-content.component";
import { PublicGuard, ProtectedGuard } from 'ngx-auth';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin',
        /*canActivate:[PublicGuard],*/
        canActivateChild: [ProtectedGuard],
        component: AdminComponent,
        children:[
            {path:'content', component: AdminContentComponent}
    ]},
    {path: 'not-found', component: PageNotFoundComponent, data: {message: "Page not found"}},
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