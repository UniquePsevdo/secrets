"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("../home/home.component");
var admin_component_1 = require("../admin/admin.component");
var page_not_found_component_1 = require("../page-not-found/page-not-found.component");
var ngx_auth_1 = require("ngx-auth");
var showroom_component_1 = require("../brand/showroom/showroom.component");
var cabinet_component_1 = require("../brand/cabinet/cabinet.component");
var events_component_1 = require("../brand/events/events.component");
var cabinet_form_component_1 = require("../admin/admin-content/cabinet-form/cabinet-form.component");
var showroom_form_component_1 = require("../admin/admin-content/showroom-form/showroom-form.component");
var events_form_component_1 = require("../admin/admin-content/events-form/events-form.component");
exports.childRoutesDefault = [
    { path: '', pathMatch: 'full', component: home_component_1.HomeComponent },
    { path: 'showroom/:name', component: showroom_component_1.ShowroomComponent },
    { path: 'brand/:name', component: cabinet_component_1.CabinetComponent },
    { path: 'events/:name', component: events_component_1.EventsComponent },
    { path: 'admin',
        /*canActivate:[PublicGuard],*/
        canActivateChild: [ngx_auth_1.ProtectedGuard],
        component: admin_component_1.AdminComponent,
        children: [
            { path: 'cabinet', component: cabinet_form_component_1.CabinetFormComponent },
            { path: 'showroom', component: showroom_form_component_1.ShowroomFormComponent },
            { path: 'events', component: events_form_component_1.EventsFormComponent }
        ] },
    { path: 'not-found', component: page_not_found_component_1.PageNotFoundComponent, data: { message: "Page not found" } },
    { path: '**', redirectTo: 'not-found' }
];
//# sourceMappingURL=defaultRoutes.js.map