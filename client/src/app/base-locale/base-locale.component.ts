import {Component, OnInit} from '@angular/core';
import * as fromRoot from '../reducers/index';
import {Store} from "@ngrx/store";
import { Router} from "@angular/router";
import {Globals} from "../../globals/globals";

@Component({
    selector: 'app-base-locale',
    templateUrl: './base-locale.component.html',
    styleUrls: ['./base-locale.component.scss']
})
export class BaseLocaleComponent implements OnInit {
    constructor(private store: Store<fromRoot.AppState>, private router: Router, private globals: Globals) {
        let url = globals.currentLang + (globals.path===''?'':'/'+ globals.path);
        console.log('BaseLocaleComponent');
        setTimeout(()=>{
            this.router.navigate([url]);
        },0)

    }

    ngOnInit() {
    }

}
