import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNoteComponent } from './all-note/all-note.component';
import { ShowNoteComponent } from './show-note/show-note.component';

const routes: Routes = [
  {
    path:'all-note', component:AllNoteComponent,
  },

  {
    path: ':id' , component:ShowNoteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NOTERoutingModule { }
