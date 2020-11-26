import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validar } from 'src/app/api/models/validar';
import { Users } from 'src/app/api/services/users.service';
import { UsuariosResourceService } from 'src/app/api/services/usuarios-resource.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _service: UsuariosResourceService,
    private _userService: Users
  ) {   

    if(this._authService.login()){
      this._router.navigate(['main/home']);
    }
      this.loginForm = this._fb.group({
        password: new FormControl('', [Validators.required, Validators.maxLength(255)]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      });
    }
  ngOnInit(): void {

    let token = localStorage.getItem('token'),
    lastName  = localStorage.Apellido

    console.log(token + lastName)

   }

  get form(): any { 
    return this.loginForm.controls; 
  }

  login(){
    this.submitted = true;

    let user: Validar = {
      email: 'mpastarini@ubp.edu.ar',
      password: 'pyxis'
    }
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this._userService.login(user)
        .subscribe(result => {
            sessionStorage.setItem('token', 'asdasADAUDHASDasdqd2522')
            sessionStorage.Apellido = 'Márquez Montoya'
            this._authService.setLogueado();
            this._router.navigate(['/main/home']); 
        })
    }
  }
}
