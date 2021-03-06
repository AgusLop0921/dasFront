import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validar } from 'src/app/api/models/validar';
import { Users } from 'src/app/api/services/users.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = true;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _userService: Users
  ) {   

      this.loginForm = this._fb.group({
        password: new FormControl('', [Validators.required, Validators.maxLength(255)]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      });
    }
  ngOnInit(): void { }

  get form(): any { 
    return this.loginForm.controls; 
  }

  login(){
    this.submitted = true;

    let user: Validar = {
      correo: this.form.email.value,
      clave: this.form.password.value
    }
    if(this.loginForm.valid){
      this._userService.login(user)
        .subscribe(response => {
          if(!response.token){
            alert("El correo o la clave son incorrectas");
            this.loginForm.reset();
          }else{
            sessionStorage.setItem('token', response.token)
            this._authService.nextUserSubject(response);
            this._router.navigate(['home']); 
          }
          this.submitted = false;
          this.loading = false;

        },()=> {
          this.submitted = false;
      })
    }
  }
}
