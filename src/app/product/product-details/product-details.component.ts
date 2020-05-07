import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../Product';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private ProductService: ProductService,
    private router: ActivatedRoute,
    private Router: Router) { }

  // biến product có kiểu dữ liệu là Product
  product: Product;
  ngOnInit(): void {
    this.getProductById();
  }
  getProductById() {
    this.router.params.subscribe(param => {
      this.ProductService.getProducById(param.productID).subscribe(data => {
        this.product = data;
        console.log(this.product)
      })
    })
  }
}
