import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/api/models/usuario';
import { Users } from 'src/app/api/services/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.styl']
})
export class MainPageComponent implements OnInit {
  public user: any ;
  public loading: boolean = true;
  constructor(
    private _userService: Users,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this._userService.getUserData()
      .subscribe(response=>{
        this.user = response[0];
        this.loading = false;
      },error=>{
        this.loading = false;
        alert("Sesión expirado, vuelva a autenticarse")
        sessionStorage.removeItem('token');
        this._route.navigate(['login']);

      })
  }

  cerrarSesion(){
    sessionStorage.removeItem('token');
    window.location.reload();
  }
}
