import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private route : ActivatedRoute ) {
    }

    signInForm : FormGroup;

    ngOnInit() {
        this.signInForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    }

    onSignIn() {
        this.authService.signIn();
    }

    onSignOut() {
        this.authService.signOut();
    }

    goToContent() {
        this.router.navigate(['content'],{relativeTo:this.route});
    }

    onSubmit(){
        console.log(this.signInForm);
    }
}
