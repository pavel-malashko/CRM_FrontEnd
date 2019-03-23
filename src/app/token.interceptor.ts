import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DataService } from './data-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private dataService: DataService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.dataService.getToken();
        if (token) {
            request = request.clone({
                headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }),
                withCredentials: true
              });
        } else {
            request = request.clone({
                withCredentials: true
              });
            this.dataService.clearUserData();
        }
        return next.handle(request);
    }
}

