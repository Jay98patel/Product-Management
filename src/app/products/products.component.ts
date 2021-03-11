import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../services/product-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // itemsList:any
  constructor(public _productList: ProductServices) {
  }
  
  ngOnInit(): void {
    // this._productList.getProductList().subscribe((list) => {
    //   this.itemsList=list
    // })
  }

}
