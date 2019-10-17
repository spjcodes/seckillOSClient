import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import {ConfigService} from './services/config.service';
import {UserService} from './services/user.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './index/navbar/navbar.component';
import { PageoneComponent } from './index/pageone/pageone.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import {NgbCarouselConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductbytypeComponent } from './index/productbytype/productbytype.component';
import {ProductService} from './services/product.service';
import { ProductComponent } from './index/product/product.component';
import { ProductmanageComponent } from './manage/productmanage/productmanage.component';
import { UsermanageComponent } from './manage/usermanage/usermanage.component';
import { ManagepageComponent } from './manage/managepage/managepage.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PageoneComponent,
    CarouselComponent,
    ProductbytypeComponent,
    ProductComponent,
    ProductmanageComponent,
    UsermanageComponent,
    ManagepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    ConfigService,
    UserService,
    NgbCarouselConfig,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
