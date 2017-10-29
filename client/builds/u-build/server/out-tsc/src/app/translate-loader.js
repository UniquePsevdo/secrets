"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
CustomTranslateLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CustomTranslateLoader);
exports.CustomTranslateLoader = CustomTranslateLoader;
//# sourceMappingURL=translate-loader.js.map