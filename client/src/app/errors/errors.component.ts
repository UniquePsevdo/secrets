import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ErrorService} from "./error.service";
import {SnackBarComponent} from '../snack-bar/snack-bar.component';
import {ErrorComponent} from "./error.model";

@Component({
    selector: 'app-errors',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
    error: ErrorComponent;

    constructor(public notification: MdSnackBar, public errorService: ErrorService) {}

    ngOnInit() {
        this.errorService.errorOccured.subscribe(
            (error: ErrorComponent)=>{
                this.error = error;
                this.openDialog(this.error);
            }
        )
    }

    openDialog(error: ErrorComponent) {
        this.notification.open(error.title, error.message, {
            duration: 5000
        });
    }

}