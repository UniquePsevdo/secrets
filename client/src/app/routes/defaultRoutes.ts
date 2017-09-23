import {Routes} from "@angular/router";
import {HomeComponent} from '../home/home.component';
import {AdminComponent} from '../admin/admin.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AdminContentComponent} from "../admin/admin-content/admin-content.component";
import { PublicGuard, ProtectedGuard } from 'ngx-auth';
import {ShowroomComponent} from "../brand/showroom/showroom.component";
import {CabinetComponent} from "../brand/cabinet/cabinet.component";
import {EventsComponent} from "../brand/events/events.component";

export const childRoutesDefault: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'showroom/:name', component: ShowroomComponent},
    {path: 'brand/:name', component: CabinetComponent},
    {path: 'events/:name', component: EventsComponent},
    {path: 'admin',
        /*canActivate:[PublicGuard],*/
        canActivateChild: [ProtectedGuard],
        component: AdminComponent,
        children:[
            {path:'content', component: AdminContentComponent}
        ]},
    {path: 'not-found', component: PageNotFoundComponent, data: {message: "Page not found"}},
    {path: '**', redirectTo: 'not-found'}

];