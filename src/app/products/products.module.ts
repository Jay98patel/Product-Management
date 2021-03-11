import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
