import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {BaseLocaleComponent} from "../base-locale/base-locale.component";


export function getBaseChildRoutes(locale: string, routes: Routes): Routes {
    return [
        {path: locale, component: BaseLocaleComponent, children: routes},
        {path: 'not-found', component: PageNotFoundComponent, data: {message: "Page not found"}},
        {path: '**', component: PageNotFoundComponent}
    ]
}

