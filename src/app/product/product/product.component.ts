import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../service/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 3;

  constructor(
    private ProductService: ProductService) {

  }

  ngOnInit(): void {
    this.getProductList();
  }

  private getProductList() {
    this.ProductService.getProductList().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }
  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number, 
    productImages: string
  }>();
  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.products.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
      productId: parseInt(this.products[index].id),
      productName: this.products[index].name,
      productPrice: this.products[index].price,
      productImages: this.products[index].image

    });
  }
}
