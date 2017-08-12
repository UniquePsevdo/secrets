import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ErrorService} from "./error.service";
import {SnackBarComponent} from '../snack-bar/snack-bar.component';

@Component({
    selector: 'app-errors',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
    error: Error;

    constructor(public notification: MdSnackBar, public errorService: ErrorService) {}

    ngOnInit() {
        this.errorService.errorOccured.subscribe(
            (error: Error)=>{
                this.error = error;
                this.openDialog(this.error);
            }
        )
    }

    openDialog(error: Error) {
        this.notification.open(error.message, 'test action', {
            duration: 3000
        });
    }

}