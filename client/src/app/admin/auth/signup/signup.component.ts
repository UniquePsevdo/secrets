import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
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
        this.authService.signUp(this.signUpForm.value)
            .subscribe((response)=> {
                    console.log('response: ',response);
                },
                (err)=> {
                    console.log(err);
                }
            )

    };

}