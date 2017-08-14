import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../authentication/authentication.service";
import {AdminHttpRequests} from "../admin-http-requests";

@Component({
    selector: 'app-admin-content',
    templateUrl: './admin-content.component.html',
    styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit {
    constructor(private adminHttpRequests : AdminHttpRequests) {}

    getData() {
        this.adminHttpRequests.runRequest('getAdminData');
    }

    ngOnInit() {
    }

}
