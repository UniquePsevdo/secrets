import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {tokenNotExpired} from 'angular2-jwt';   /*without http*/
import {HttpClient} from '@angular/common/http';

import {ErrorService} from '../../errors/error.service';

@Injectable()
export class AdminHttpRequests {
    lastUrl: string;

    constructor(private http: HttpClient, private router: Router, private errorService: ErrorService) {
        this.lastUrl = "/admin";
    }

    runRequest(functionName) {
        if (tokenNotExpired('refresh_token')) {
            return this[functionName]();
        } else {
            this.errorService.handleError({title: 'Should login', message: 'Should login'});
        }
    }

    getAdminData() {
        const url = `${environment.apiUrl}` + '/test';
        return this.http.get(url)
            .subscribe((data) => {
                console.log(data);
            }, (err) => {
                console.log(err);
            })
    }

}
