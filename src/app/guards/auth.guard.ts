import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouteConfigLoadEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AFauth: AngularFireAuth, private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AFauth.authState.pipe(map (auth => {
      if (isNullOrUndefined(auth)){
        this.router.navigate(['/login']);
        return false;
      }
      else{
        return true;
      }
    }))
    
  }
  
}
