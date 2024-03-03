import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './LogIn page/crud/crud.component';
import { CrudTableComponent } from './LogIn page/crud-table/crud-table.component';

const routes: Routes = [
  { path: 'login', component: CrudComponent },
  { path: 'crud-table', component: CrudTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
