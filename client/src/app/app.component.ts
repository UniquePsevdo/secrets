import {Component} from '@angular/core';
import {SpinnerComponent} from "ng-http-loader/spinner/spinner.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(public spinnerComponent : SpinnerComponent){
    }
    title = 'Does this change?';
}