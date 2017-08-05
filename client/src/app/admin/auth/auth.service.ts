import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {environment} from '../../../environments/environment';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import request from 'request-promise';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
        /*console.log('request', request);*/
    };

    signedIn = false;

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            resolve(this.signedIn);
        });
        return promise;
    };

    signIn(data) {
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${environment.apiUrl}signin`, body, {headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    signUp(data) {
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${environment.apiUrl}signup`, body, {headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    sigOut() {
        this.signedIn = false;
        //todo:...
    }

    getToken() {

    }
}