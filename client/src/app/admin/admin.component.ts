import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Response, Headers} from '@angular/http';
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {JwtHttp} from 'angular2-jwt-refresh';
import {AdminHttpRequests} from "./admin-http-requests";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private jwtHttp: JwtHttp, private adminHttpRequests : AdminHttpRequests) {}

    ngOnInit() {}

    getData() {
        this.adminHttpRequests.runRequest('getAdminData');
        /* const url = `${environment.apiUrl}` + '/test';
        return this.jwtHttp.get(url)
            .map((res: Response) => {
                return res.json();
            }).subscribe((data) => {
                console.log(data);
            }, (err) => {
                console.log(err);
            })*/
    }
}
