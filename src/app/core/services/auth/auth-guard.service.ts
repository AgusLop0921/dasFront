import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private router: Router) {}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            const user = this._authService.userValue;
            console.log(user);
            // debugger
            if (user.token != null) {
              // authorised so return true
              return true;
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
          }
}