import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user = {
        name: 'Arthur',
        age: 42
    };

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
