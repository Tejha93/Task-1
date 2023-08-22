import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
