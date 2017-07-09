import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService{
    constructor(private http: Http){};
    signedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.signedIn);
            },800)
        });
        return promise;
    };

    signIn(){
        this.signedIn = true;
        this.http.post(`${environment.apiUrl}signin`, {data:'test'});
    }

    signUp(data){
        return this.http.post(`${environment.apiUrl}signup`, data)
    }

    sigOut(){
        this.signedIn = false;
        //todo:...
    }
}