import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  private baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl
  }
  getProductList():Observable<any>{
    return this.http.get<any>(this.baseURL)
  }
  getProdeuctDetails(id):Observable< any>{
    return this.http.get<any>(this.baseURL+'/'+id);
  }
  
}
