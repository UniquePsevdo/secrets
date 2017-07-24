import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {environment} from '../../../../environments/environment';
import * as decode from 'jwt-decode';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
        //console.log('environment : ',environment);
    }

    signInForm: FormGroup;

    ngOnInit() {
        this.signInForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    };
            //надо создать сервис который динамически считывает в переменную id user-a из token-a
    onSubmit() {
        this.authService.signIn(this.signInForm.value)
            .subscribe((data)=> {
                    console.log('data.token : ', data.token);
                    console.log('decode(token) : ', decode(data.token));
                    console.log('exp : ', JSON.parse(JSON.stringify(decode(data.token))).exp);
                    localStorage.setItem('token', JSON.stringify({token : data.token, exp : JSON.parse(JSON.stringify(decode(data.token))).exp}));
                    this.authService.signedIn = true;
                },
                (err)=> {
                    console.log(err);
                }
            )

    };

}
