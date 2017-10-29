"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_not_found_component_1 = require("../page-not-found/page-not-found.component");
var base_locale_component_1 = require("../base-locale/base-locale.component");
function getBaseChildRoutes(locale, routes) {
    return [
        { path: locale, component: base_locale_component_1.BaseLocaleComponent, children: routes },
        { path: 'not-found', component: page_not_found_component_1.PageNotFoundComponent, data: { message: "Page not found" } },
        { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
    ];
}
exports.getBaseChildRoutes = getBaseChildRoutes;
//# sourceMappingURL=localeRoutes.js.map