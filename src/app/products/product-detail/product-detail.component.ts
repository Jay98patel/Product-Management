import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from 'src/app/services/product-services.service';
import { Location } from '@angular/common';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id:string;
  product:Product
  constructor(private service:ProductServices,private router:ActivatedRoute,private location:Location ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params.id;
    this.service.getProdeuctDetails(this.id).subscribe((item)=>this.product=item)
  }
  goBackToList(){
    this.location.back();   
  }

}
