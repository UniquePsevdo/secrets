import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class RefreshAuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url===`${environment.apiUrl}${environment.refresh_endpoint}` && localStorage.getItem('refresh_token')){
            const authHeader = `Bearer ${localStorage.getItem('refresh_token')}`;
            // Clone the request to add the new header.
            const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}