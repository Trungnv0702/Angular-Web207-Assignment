import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})

export class ListProductComponent implements OnInit {
  //Biến product có kiểu dữ liệu Product
  products: Product[];
  page = 1;
  pageSize = 10;
  product: Product = new Product();
  searchText;
  currentUser: any;
  constructor(private ProductService: ProductService,
    private router: Router,
    private userService: UserService,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    
    if (this.token.getUser()) {
      this.currentUser = true;
      this.getProductList();
    }
    else {
      this.router.navigateByUrl('/login');
    }
    
    
  }

  //phương thức get data từ service
  private getProductList() {
    this.ProductService.getProductList().subscribe(data => {
      this.products = data;
      this.products.reverse();
      console.log(this.products);
    })

  }
  //method add sản phẩm
  addNewProduct() {
    this.ProductService.addNewProduct(this.product).subscribe(data => {
      this.getProductList();
      this.product = new Product;

    });
  }
  deleteProduct(id) {

    this.ProductService.deleteProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id != response.id)
    })

  }
}
