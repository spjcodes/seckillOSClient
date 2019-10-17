import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {Register} from 'ts-node';
import {RegisterComponent} from './login/register/register.component';
import {AppComponent} from './app.component';
import {PageoneComponent} from './index/pageone/pageone.component';
import {ManagepageComponent} from './manage/managepage/managepage.component';
import {ProductmanageComponent} from './manage/productmanage/productmanage.component';
import {UsermanageComponent} from './manage/usermanage/usermanage.component';

const routes: Routes = [
  {path: '', redirectTo: 'pageOne', pathMatch: 'full'},
  {path: 'pageOne', component: PageoneComponent},
  {path: 'index', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // admin管理router
  {path: 'managePage', component: ManagepageComponent,
    children: [
      // {path: '', component: ManagepageComponent},
      {path: 'productManage', component: ProductmanageComponent},
      {path: 'userManage', component: UsermanageComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
