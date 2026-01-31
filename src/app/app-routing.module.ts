import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './layouts/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, title: 'Homepage'},
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: '**', component: ForbiddenComponent, title: 'Forbidden' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
