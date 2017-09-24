import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NavigationService} from "../nav-service/nav-service";

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

    constructor(private translate: TranslateService, private navigationService : NavigationService) {
    }

    ngOnInit() {
    }

    goToNavParams(navParams){
        this.navigationService.goToNavParams(navParams);
    }

/*{path: 'showroom/:name', component: ShowroomComponent},
{path: 'brand/:name', component: CabinetComponent},
{path: 'events/:name', component: EventsComponent},*/

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
