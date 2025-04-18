import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ErrorPageComponent } from './feature/error-page/error-page.component';

const routes: Routes = [



  {
    path: '',
    loadChildren: () =>
      import('./feature/feature.module').then(m => m.FeatureModule)
  },

  { path: '**', component:ErrorPageComponent } // Default route or redirect to register
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
