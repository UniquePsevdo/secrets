import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {childRoutesDefault} from "./routes/defaultRoutes";

@NgModule({
    imports: [
        RouterModule.forRoot(childRoutesDefault)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}


