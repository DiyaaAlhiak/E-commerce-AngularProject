import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
{
  path:"Product",
  component:AllProductComponent,
},
{
  path:"Product-detils",
  component:ProductDetailsComponent,
},
{
  path:"cart",
  component:CartComponent,
},
{
  path:"**",
  component:AllProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
