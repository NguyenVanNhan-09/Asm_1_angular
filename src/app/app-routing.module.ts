import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { CategoryComponent } from './component/category/category.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { UpdateProductComponent } from './component/admin/update-product/update-product.component';
import { AddCategoryComponent } from './component/admin/add-category/add-category.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'client/product-list', pathMatch: 'full' },
  {
    path: 'client',
    component: ClientComponent,
    children: [
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart/:id', component: CartComponent },
      { path: 'product-category/:id', component: CategoryComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboad', component: DashboardComponent },
      { path: 'update-product/:id', component: UpdateProductComponent },
      { path: 'add-category', component: AddCategoryComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
