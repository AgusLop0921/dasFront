import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private _loader: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loader.start();
    return next.handle(request).pipe(finalize(() => this._loader.complete()));
  }

}
