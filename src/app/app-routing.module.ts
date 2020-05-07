import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './product/home/home.component';
import { AboutComponent } from './product/about/about.component';
import { ServiceSideComponent } from './product/service-side/service-side.component';
import { PortfolioComponent } from './product/portfolio/portfolio.component';
import { ContactComponent } from './product/contact/contact.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AdminIndexComponent } from './admin/admin-index/admin-index.component';
import { Product } from './model/Product';
import { ProductComponent } from './product/product/product.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ShowCardComponent } from './product/show-card/show-card.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "service", component: ServiceSideComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact", component: ContactComponent },
  { path: "card", component: ShowCardComponent },
  { path: 'product-detail/:productID', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent},
  
  // { path: "admin", component: AddProductComponent },
  // { path: 'admin', component: AdminIndexComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: "admin", component: AdminIndexComponent,
    children: [{
      path: '', redirectTo: 'add-product', pathMatch: 'full'
    },
    { path: 'add-product', component: AddProductComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'list-product', component: ListProductComponent },
    { path: 'edit/:productID', component: EditProductComponent },
    
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
