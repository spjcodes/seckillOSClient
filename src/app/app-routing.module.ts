import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {Register} from 'ts-node';
import {RegisterComponent} from './login/register/register.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  // {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
