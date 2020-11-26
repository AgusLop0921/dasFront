import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './layouts/loader/loader.component';
// import { LoaderService } from './services/loader/loader.service';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // LoaderService
  ],
  exports: [
    LoaderComponent
  ]
})
export class CoreModule { }
