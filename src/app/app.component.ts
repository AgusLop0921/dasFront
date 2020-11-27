import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from './api/models/usuario';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'parcialDasFront';

  constructor(
    private _route: Router,
    private _authService: AuthService
  ){
    const token: Token = {token: sessionStorage.getItem('token')}
    if(token){
      this._authService.nextUserSubject(token);
      this._route.navigate(['home']);
    }

  }
}
