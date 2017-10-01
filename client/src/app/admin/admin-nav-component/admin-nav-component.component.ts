import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../../nav-service/nav-service";

@Component({
    selector: 'app-admin-nav-component',
    templateUrl: './admin-nav-component.component.html',
    styleUrls: ['./admin-nav-component.component.scss']
})
export class AdminNavComponentComponent implements OnInit {

    constructor(private navigationService : NavigationService) {
    }

    ngOnInit() {
    }

    goToNavParams(navParams){
        this.navigationService.goToNavParams(navParams);
    }

}
