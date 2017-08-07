import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Response, Headers} from '@angular/http';
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import { JwtHttp } from 'angular2-jwt-refresh';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router, private route : ActivatedRoute, private jwtHttp : JwtHttp) {

    }

    ngOnInit() {
    }

    getData(){
        const url = `${environment.apiUrl}` + '/test';

            return this.jwtHttp.get(url)
                .map((res: Response) => {
                    return res.json();
                })
                .catch((error: Response) => Observable.throw(error.json()))
                .subscribe((data)=>{
                    console.log(data);
                })
    }

    runInterval(){
        /*setInterval(() => {*/
            this.getData();
        /*}, 5000);*/
    }



    /*login(data, userType: string) {
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${environment.apiUrl}${environment.token_endpoint}`, body, {headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }*/
}
