import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Đường dẫn API
  API = "https://5e7cb472a917d70016683af5.mockapi.io/Assignment";

  // Tạo biến product có kiểu dữ liệu là Product
  products: Product[];

  //Hàm tạo
  constructor(private http: HttpClient) { }

  // method get product list
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  //method lấy sản phẩm theo ID
  getProducById(id): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  getProducByName(name): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${name}`)
  }

  //method update sản phẩm
  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }
  
  //method add product
  addNewProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.API}`, product);
  }

  //method xóa sản phẩm
  deleteProduct(id): Observable<Product> {

    return this.http.delete<Product>(`${this.API}/${id}`)

  }

}



