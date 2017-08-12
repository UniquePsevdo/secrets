import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {tokenNotExpired} from 'angular2-jwt';
import {Subject, Observable} from 'rxjs';
import { JwtHttp } from 'angular2-jwt-refresh';
import {ErrorService} from '../errors/error.service';

@Injectable()
export class AdminHttpRequests {
    requireLoginSubject: Subject<boolean>;
    tokenIsBeingRefreshed: Subject<boolean>;
    lastUrl: string;

    constructor(private http: Http, private router: Router, private jwtHttp : JwtHttp, private errorService : ErrorService) {
        this.requireLoginSubject = new Subject<boolean>();
        this.tokenIsBeingRefreshed = new Subject<boolean>();
        this.tokenIsBeingRefreshed.next(false);
        this.lastUrl = "/admin";
    }

    runRequest(functionName){
        if(tokenNotExpired('refresh_token')){
            return this[functionName]();
        }else{
            this.errorService.handleError({title : 'Should login', message : 'Should login'});
        }
    }

    getAdminData(){
        const url = `${environment.apiUrl}` + '/test';
        return this.jwtHttp.get(url)
            .map((res: Response) => {
                return res.json();
            }).subscribe((data)=>{
                console.log(data);
            }, (err)=>{
                console.log(err);
            })
    }

}