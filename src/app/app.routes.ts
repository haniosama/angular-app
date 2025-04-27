import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { RegisterationComponent } from './component/registeration/registeration.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/addproducts/products.component';
import { ShowproductsComponent } from './component/showproducts/showproducts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: ' Home.angular' },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About.angular',
  },
  {
    path: 'register',
    component: RegisterationComponent,
    title: 'Resgisteration.angular',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login.angular',
  },
  {
    path: 'product',
    component: ProductsComponent,
    title: 'product.angular',
  },
  {
    path: 'showproducts',
    component: ShowproductsComponent,
    title: 'showproduct.angular',
  },
];
