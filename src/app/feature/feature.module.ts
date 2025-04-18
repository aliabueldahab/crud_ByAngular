import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './home/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
