import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, Response} from '@angular/http';
import {environment} from '../environments/environment';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Subject, Observable} from 'rxjs';
import { JwtHttp } from 'angular2-jwt-refresh';

@Injectable()
export class AuthService {
    requireLoginSubject: Subject<boolean>;
    tokenIsBeingRefreshed: Subject<boolean>;
    lastUrl: string;

    constructor(private http: Http, private router: Router, private jwtHttp : JwtHttp) {
        this.requireLoginSubject = new Subject<boolean>();
        this.tokenIsBeingRefreshed = new Subject<boolean>();
        this.tokenIsBeingRefreshed.next(false);
        this.lastUrl = "/admin";
    }

    isUserAuthenticated() {
        if (this.loggedIn()) {
            this.requireLoginSubject.next(false);
            return true;
        } else {
            return false;
        }
    }

    login(data, userType: string) {
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${environment.apiUrl}${environment.token_endpoint}`, body, {headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    register(data, userType: string) {
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${environment.apiUrl}/register`, body, {headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    loggedIn() {
        return tokenNotExpired();
    }

    isAuthenticated() {
        return this.isUserAuthenticated();
    };

    addTokens(accessToken: string, refreshToken: string) {
        localStorage.setItem('token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        this.requireLoginSubject.next(true);
    }
}
