import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { DataService } from './data-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private dataService: DataService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).do((event: HttpEvent<any>) => {

      }, (err: any) => {
            switch (err.status) {
                case 0:
                    this.dataService.showAlert.next({type: 'danger', message: 'Server do not working!'});
                    this.dataService.clearUserData();
                    this.dataService.loggedIn.next(false);
                    break;
                case 401:
                    this.dataService.showAlert.next({type: 'danger', message: 'You are not authorized!'});
                    this.dataService.clearUserData();
                    this.dataService.loggedIn.next(false);
                    break;
                case 400:
                    this.dataService.showAlert.next({type: 'danger', message: 'You are not authorized!'});
                    this.dataService.clearUserData();
                    this.dataService.loggedIn.next(false);
                    break;
                default:
                console.log('default errr !!!!!', err);
                this.dataService.showAlert.next({type: 'danger', message: 'default errr !!!!!'});
                    break;
            }

      });
    }
  }

  
const enum HttpErrors {
    Up = 'sdc',
    Down = 'sdc',
    Left = 'sdc',
    Right = 'sdc'
}
