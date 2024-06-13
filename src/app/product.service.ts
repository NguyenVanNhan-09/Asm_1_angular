import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TProduct } from '../interface/product';
import { TCategory } from '../interface/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000';
  Get_All_Product = (): Observable<any> => {
    return this.http.get(this.API_URL + '/products');
  };
  Add_Product = (data: TProduct): Observable<any> => {
    return this.http.post(this.API_URL + '/products', data);
  };
  Get_Category = (): Observable<any> => {
    return this.http.get(this.API_URL + '/categorys');
  };
  Add_Category = (data: TCategory): Observable<any> => {
    return this.http.post(this.API_URL + '/categorys', data);
  };
  Delete_Product = (id: any) => {
    return this.http.delete(this.API_URL + '/products/' + id);
  };
  Get_Product_ById = (id: any): Observable<any> => {
    return this.http.get(this.API_URL + '/products/' + id);
  };
  Update_Product = (id: any, data: TProduct): Observable<any> => {
    return this.http.put(this.API_URL + '/products/' + id, data);
  };
  Search = (keywords: string): Observable<any> => {
    return this.http.get(this.API_URL + `/products?title_like=${keywords}`);
  };
  SearchByCategory = (id: any): Observable<any> => {
    return this.http.get(this.API_URL + `/products?category=${id}`);
  };
}
