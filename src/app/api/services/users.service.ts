import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Validar } from '../models/validar';

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

  public login(user: Validar): Observable<any> {
    const httpOptions2 = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', }), }; 
    // const body = new HttpParams().set('correo', 'mpastarini@ubp.edu.ar').set('clave', 'pyxis'); 
 
    // const body = {
    //   correo: 'mpastarini@ubp.edu.ar',
    //   clave: 'pyxis'
    // }
    const body = new HttpParams().set('correo', 'mpastarini@ubp.edu.ar').set('clave', 'pyxis');
    return this.http.post(`${this.url}/login`, body ,this.httpOptions);
  }

}