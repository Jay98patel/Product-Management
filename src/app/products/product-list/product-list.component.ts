import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductServices } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() public itemsList
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'title', 'getDetail'];

  dataSource: MatTableDataSource<any[]>
  constructor(public _productList: ProductServices) { }

  ngOnInit(): void {
    this._productList.getProductList().subscribe((list) => {
      this.itemsList = list
      // console.log(MatTableDataSource)
      this.dataSource = new MatTableDataSource(this.itemsList);;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    })
    this.dataSource.filterPredicate = (data: any, filter: string) => data.title.indexOf(filter) != -1;
  }
  searchItem(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
