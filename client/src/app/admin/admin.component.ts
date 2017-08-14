import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Response, Headers} from '@angular/http';
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {AdminHttpRequests} from "./admin-http-requests";
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute, private adminHttpRequests : AdminHttpRequests) {}

    ngOnInit() {}

    logout(){
        this.authenticationService.logout();
    }
}
