import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import { environment } from '../../../environments/environment';
import 'rxjs/Rx';
import {Observable} from "rxjs";

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

    signIn(data){
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.post(`${environment.apiUrl}signin`, body, {headers})
            .map((response: Response)=> response.json())
            .catch((error: Response)=> Observable.throw(error.json()));
    }

    signUp(data){
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.post(`${environment.apiUrl}signup`, body, {headers})
            .map((response: Response)=> response.json())
            .catch((error: Response)=> Observable.throw(error.json()));
    }

    sigOut(){
        this.signedIn = false;
        //todo:...
    }

    getToken(){

    }
}