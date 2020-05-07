import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './product/slider/slider.component';
import { HomeComponent } from './product/home/home.component';
import { FooterComponent } from './product/footer/footer.component';
import { AboutComponent } from './product/about/about.component';
import { ServiceSideComponent } from './product/service-side/service-side.component';
import { PortfolioComponent } from './product/portfolio/portfolio.component';
import { ContactComponent } from './product/contact/contact.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AdminIndexComponent } from './admin/admin-index/admin-index.component';
import { NavBarComponent } from './product/nav-bar/nav-bar.component';
import { ProductComponent } from './product/product/product.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ShowCardComponent } from './product/show-card/show-card.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { LoginComponent } from './login/login.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServiceSideComponent,
    PortfolioComponent,
    ContactComponent,
    AddProductComponent,
    EditProductComponent,
    AdminIndexComponent,
    NavBarComponent,
    ProductComponent,
    ListProductComponent,
     ShowCardComponent,
     ProductDetailsComponent, 

     LoginComponent,
     RegisterComponent,
     BoardAdminComponent,
     BoardUserComponent,
     ProfileComponent,
     AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule, 
    NgbPaginationModule, 
    Ng2SearchPipeModule, 
    AutocompleteLibModule, 
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
