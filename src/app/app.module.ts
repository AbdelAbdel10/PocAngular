import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { Routes, RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsAddEditComponent } from './components/clients-add-edit/clients-add-edit.component';
import { TitreComponent } from './components/title/titre.component';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ClientsComponent,
    ClientsAddEditComponent,
    TitreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
