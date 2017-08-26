import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'ngx-auth';
import {environment} from '../../environments/environment';

import { TokenStorage } from './token-storage.service';

interface AccessData {
    token: string;
    refresh_token: string;
}

@Injectable()
export class AuthenticationService implements AuthService {

    constructor(
        private http: HttpClient,
        private tokenStorage: TokenStorage
    ) {}

    /**
     * Check, if user already authorized.
     * @description Should return Observable with true or false values
     * @returns {Observable<boolean>}
     * @memberOf AuthService
     */
    public isAuthorized(): Observable < boolean > {
        return this.tokenStorage
            .getAccessToken()
            .map((token) => {
            console.log(!!token);
            return !!token
        });
    }

    /**
     * Get access token
     * @description Should return access token in Observable from e.g.
     * localStorage
     * @returns {Observable<string>}
     */
    public getAccessToken(): Observable < string > {
        return this.tokenStorage.getAccessToken();
    }

    /**
     * Function, that should perform refresh token verifyTokenRequest
     * @description Should be successfully completed so interceptor
     * can execute pending requests or retry original one
     * @returns {Observable<any>}
     */
    public refreshToken(): Observable < AccessData > {
        return this.tokenStorage
            .getRefreshToken()
            .switchMap((refreshToken: string) => {
                return this.http.post(`${environment.apiUrl}${environment.refresh_endpoint}`, { refreshToken });
            })
            .do(this.saveAccessData.bind(this))
            .catch((err) => {
                this.logout();

                return Observable.throw(err);
            });
    }

    public isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    /**
     * Function, checks response of failed request to determine,
     * whether token be refreshed or not.
     * @description Essentialy checks status
     * @param {Response} response
     * @returns {boolean}
     */
    public refreshShouldHappen(response: HttpErrorResponse): boolean {
        return response.status === 401
    }

    /**
     * Verify that outgoing request is refresh-token,
     * so interceptor won't intercept this request
     * @param {string} url
     * @returns {boolean}
     */
    public verifyTokenRequest(url: string): boolean {
        return url.endsWith('/refresh');
    }

    /**
     * EXTRA AUTH METHODS
     */

    public login(body): Observable<any> {
        return this.http.post(`${environment.apiUrl}${environment.token_endpoint}`, body)
            .do((tokens: AccessData) => this.saveAccessData(tokens));
    }

    register(body) {
        return this.http.post(`${environment.apiUrl}/register`, body)
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    /**
     * Logout
     */
    public logout(): void {
        this.tokenStorage.clear();
        location.reload(true);
    }

    /**
     * Save access data in the storage
     *
     * @private
     * @param {AccessData} data
     */
    private saveAccessData({ token, refresh_token }: AccessData) {
        this.tokenStorage
            .setAccessToken(token)
            .setRefreshToken(refresh_token);
    }

}