import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

// implements TranslateLoader
@Injectable()
export class CustomTranslateLoader implements TranslateLoader {

    constructor(public http: HttpClient) {
    }

    public getTranslation(lang: string): Observable<any> {
        console.log('getTranslation');
        if(environment.envName === 'local'){
            return this.http.get(`../assets/i18n/${lang}.json`);
        }else{
            return this.http.get(`${environment.apiUrl}/i18n?language=${lang}`,
                {
                    headers: new HttpHeaders().set('Accept-Language', lang),
                }
            )
        }
    }
}

