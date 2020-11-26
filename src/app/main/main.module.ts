import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthService } from '../core/services/auth/auth.service';
import { AuthGuard } from '../core/services/auth/auth-guard.service';
import { HttpInterceptorService } from '../core/services/inteceptors/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    AuthService,
    AuthGuard
  ]
})
export class MainModule { }
