import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductServices } from '../services/product-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  parentProductList:Product[]
  constructor(public productListService:ProductServices) {
    this.productListService.getProductList().subscribe((list)=>{
      this.parentProductList=list
    })
  }
  
  ngOnInit() {
    
  }

}
