import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  private baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl
  }
  getProductList():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL)
  }
  getProdeuctDetails(id):Observable<Product>{
    return this.http.get<Product>(this.baseURL+`/`+id);
  }
}
