import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {environment} from '../../../environments/environment';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import autorefresh from 'jwt-autorefresh';
import request from 'request-promise';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
        console.log('request', request);
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

    /** Function that returns a promise which will resolve to a simple jwt access_token (you handle the persistence mechanism) */
    refresh() {
        const init = {
            method: 'POST'
            , headers: {'Content-Type': `application/x-www-form-urlencoded`}
            , body: `refresh_token=${localStorage.getItem('refresh_token')}`
        }
        return request('/refresh-token', init).then(res => res.json())
            .then(({token_type, access_token, expires_in, refresh_token}) => {
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
                return access_token
            })


    }

    /** You supply a leadSeconds number or function that generates a number of seconds that the refresh should occur prior to the access token expiring */
    leadSeconds = () => {
        /** Generate random additional seconds (up to 30 in this case) to append to the lead time to ensure multiple clients dont schedule simultaneous refresh */
        const jitter = Math.floor(Math.random() * 30);
        /** Schedule autorefresh to occur 60 to 90 seconds prior to token expiration */
        return 60 + jitter;
    }

    start(access_token){
        console.log(2);
        autorefresh({refresh: this.refresh, leadSeconds: this.leadSeconds});
        console.log(3);
    }

    cancel = null;

    onAuthorize(access_token) {
        this.cancel = null;
        console.log(1);
        this.cancel = this.start(access_token);
    };

    onDeauthorize() {
        this.cancel= null;
    }
}