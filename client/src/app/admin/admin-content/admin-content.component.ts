import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
    selector: 'app-admin-content',
    templateUrl: './admin-content.component.html',
    styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) {

    }

    ngOnInit() {
    }

}
