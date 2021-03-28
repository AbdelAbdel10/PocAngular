import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsAddEditComponent } from './components/clients-add-edit/clients-add-edit.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TitreComponent } from './components/title/titre.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'add', component: ClientsAddEditComponent },
  { path: 'edit', component: ClientsAddEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
