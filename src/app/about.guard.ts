import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Router} from '@angular/router'
import { Injectable } from '@angular/core'
import { DataService } from './data-service.service';
@Injectable()
export class AboutGuard implements CanActivate{

    constructor(public router:Router, private dataService: DataService){}

    canActivate() : Observable<boolean> | boolean{
       return this.dataService.isLoggedIn();
    }
}
