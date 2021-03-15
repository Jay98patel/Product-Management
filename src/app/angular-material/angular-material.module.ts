import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [],
  
  exports: [
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],

})
export class AngularMaterialModule {
}
