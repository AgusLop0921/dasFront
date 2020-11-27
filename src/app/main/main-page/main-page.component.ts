import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/api/services/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.styl']
})
export class MainPageComponent implements OnInit {

  constructor(
    private _userService: Users
  ) { }

  ngOnInit(): void {
    // this._userService.getUserData()
    //   .subscribe(response=>{
    //     console.log(response);
    //   })
  }

  cerrarSesion(){
    sessionStorage.removeItem('token');
    window.location.reload();
  }
}
