import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Biến product có kiểu dữ liệu Product
  products: Product[];

  //Hàm tạo
  constructor(
    private ProductService: ProductService) {

  }

  //Hàm ngOnInit sẽ được chạy đầu tiên
  ngOnInit(): void {
    
    //Gọi hàm getProductList() để lấy dữ liệu lên component
    this.getProductList();
  }

  //phương thức get data từ service
  private getProductList() {
    this.ProductService.getProductList().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })

  }

}
