import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { P2Component } from './components/p2/p2.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'p2', component: P2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
