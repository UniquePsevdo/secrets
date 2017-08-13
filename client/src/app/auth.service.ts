/*Old*/





import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Response} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Subject, Observable} from 'rxjs';
import {JwtModule} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    requireLoginSubject: Subject<boolean>;
    tokenIsBeingRefreshed: Subject<boolean>;
    lastUrl: string;

    constructor(private http: HttpClient, private router: Router) {
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

    login(body, userType: string) {
        return this.http.post(`${environment.apiUrl}${environment.token_endpoint}`, body)
            .catch((error: Response) => Observable.throw(error.json()));
    }

    register(body, userType: string) {
        return this.http.post(`${environment.apiUrl}/register`, body)
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
