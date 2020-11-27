import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';
import { Token } from 'src/app/api/models/usuario';

@Injectable()
export class AuthService {

    public userSubject: BehaviorSubject<Token> ;

    constructor() {
      this.userSubject = new BehaviorSubject<Token>({token: sessionStorage.getItem('token')});
    }
    // login(){
    //   return this.logueado
    // }
    // setLogueado(): void{
    //   this.logueado = true;
    // }

    public get userValue(): Token {
      return this.userSubject.value;
    }

    nextUserSubject(user: Token) {
      this.userSubject.next(user);
    }
}