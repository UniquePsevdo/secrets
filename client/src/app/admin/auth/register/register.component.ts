import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {environment} from '../../../../environments/environment';
import {AuthenticationService} from "../../../authentication/authentication.service";
import {ErrorService} from "../../../errors/error.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private authService: AuthService, private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute, private errorService:ErrorService) {
        //console.log('environment: ', environment);
    }

    signUpForm: FormGroup;

    ngOnInit() {
        this.signUpForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    };

    onSubmit() {
        this.authenticationService.register(this.signUpForm.value)
            .subscribe((response)=> {
                    console.log('response: ', response);
                },
                (data)=> {
                    this.errorService.handleError({title: data.error.error, message: data.error.error});
                }
            )
    };

}