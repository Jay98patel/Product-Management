import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductServices } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  
})
export class ProductListComponent implements OnInit {
  @Input() itemsList:Product[]
 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns = ['checkbox', 'id', 'title', 'getDetail'];
  selection = new SelectionModel<any>(true, []);
  dataSource: MatTableDataSource<Product>

  constructor(public _productList: ProductServices) { }

  ngOnInit(){
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.itemsList);
    this.dataSource.paginator = this.paginator;
    // console.log(this.itemsList)
    // console.log(this.dataSource.paginator.pageIndex)
  }
  searchItem(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selectAll() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    // console.log(numSelected)
  }

  allToggle() {
    this.selectAll() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row))
  }
  selectedRow() {
    console.log(this.selection.selected)
  }
}
