import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    signInForm: FormGroup;

    ngOnInit() {
        this.signInForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    };

    onSubmit() {
        this.authService.login(this.signInForm.value, 'admin')
            .subscribe((data) => {
                    if (data) {
                        this.authService.addTokens(data.token, data.refresh_token);
                    }
                },
                (err) => {
                    console.log(err);
                }
            )

    };
}
