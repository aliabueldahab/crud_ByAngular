import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interceptorProviders } from './interceptors';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    
    
  ],

  providers:[
    interceptorProviders,
  ]
})
export class CoreModule { }
