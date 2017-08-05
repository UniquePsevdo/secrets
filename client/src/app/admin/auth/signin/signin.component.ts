import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
        /*console.log('environment : ', environment);*/
        //console.log(autorefresh);
    }

    signInForm: FormGroup;

    ngOnInit() {
        this.signInForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    };

    onSubmit() {
        this.authService.signIn(this.signInForm.value)
            .subscribe((data) => {
                    if (data) {
                        console.log(0, data.token);
                    }
                },
                (err) => {
                    console.log(err);
                }
            )

    };
}
