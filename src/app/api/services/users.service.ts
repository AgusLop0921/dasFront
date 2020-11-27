import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Validar } from '../models/validar';
import { Token } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class Users {
  private url = ` ${environment.apiUrl}` 
  public redirectAfterLogin = ""

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
  };

  constructor (
    private http: HttpClient
  ) { }

  public getFactorial(code: string): Observable<any> {
    return this.http.get(`${this.url}`)
  }

  public login(user: Validar): Observable<Token> {
    const body = new HttpParams().set('correo', user.correo).set('clave', user.clave);
    return this.http.post<Token>(`${this.url}/login`, body ,this.httpOptions);
  }
}
