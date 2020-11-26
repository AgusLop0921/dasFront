import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      'Content-Type': 'text/plain',
      // 'Access-Control-Allow-Origin': '*'
    }),
  };
  constructor (
    private http: HttpClient
  ) { }

  public getFactorial(code: string): Observable<any> {
    return this.http.get(`${this.url}`)
  }

  public login(user: Validar): Observable<any> {
    return this.http.post(`http://a3639a990113.ngrok.io/Parcial3/api/login`,user)
  }

}