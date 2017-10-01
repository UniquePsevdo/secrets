import {Routes} from "@angular/router";
import {HomeComponent} from '../home/home.component';
import {AdminComponent} from '../admin/admin.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';
import {ShowroomComponent} from "../brand/showroom/showroom.component";
import {CabinetComponent} from "../brand/cabinet/cabinet.component";
import {EventsComponent} from "../brand/events/events.component";
import {CabinetFormComponent} from "../admin/admin-content/cabinet-form/cabinet-form.component";
import {ShowroomFormComponent} from "../admin/admin-content/showroom-form/showroom-form.component";
import {EventsFormComponent} from "../admin/admin-content/events-form/events-form.component";

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
            {path:'cabinet', component: CabinetFormComponent},
            {path:'showroom', component: ShowroomFormComponent},
            {path:'events', component: EventsFormComponent}
        ]},
    {path: 'not-found', component: PageNotFoundComponent, data: {message: "Page not found"}},
    {path: '**', redirectTo: 'not-found'}

];