import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { AuthenticationService } from '../../../authentication';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) {
    }

    signInForm: FormGroup;

    ngOnInit() {
        this.signInForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    };

    onSubmit() {
        /*this.authService.login(this.signInForm.value, 'admin')*/
        this.authenticationService.login(this.signInForm.value)
            .subscribe((data) => {
                    if (data) {
                        console.log(data);
                    }
                },
                (err) => {
                    console.log(err);
                }
            )

    };
}
