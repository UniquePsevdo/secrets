"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("../environments/environment");
// implements TranslateLoader
var CustomTranslateLoader = (function () {
    function CustomTranslateLoader(http) {
        this.http = http;
    }
    CustomTranslateLoader.prototype.getTranslation = function (lang) {
        console.log('getTranslation');
        if (environment_1.environment.envName === 'local') {
            return this.http.get("../assets/i18n/" + lang + ".json");
        }
        else {
            return this.http.get(environment_1.environment.apiUrl + "/translations?language=" + lang, {
                headers: new http_1.HttpHeaders().set('Accept-Language', lang),
            });
        }
    };
    return CustomTranslateLoader;
}());
CustomTranslateLoader.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
CustomTranslateLoader.ctorParameters = function () { return [
    { type: http_1.HttpClient, },
]; };
exports.CustomTranslateLoader = CustomTranslateLoader;
//# sourceMappingURL=translate-loader.js.map