import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../Product';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // biến product có kiểu dữ liệu là Product
  product: Product;
  productPreview: Product;
  currentUser: any;
  constructor(
    private ProductService: ProductService,
    private router: ActivatedRoute,
    private Router: Router,
    private userService: UserService, 
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    
    if (this.token.getUser()) {
      this.currentUser = true;
    }
    else {
      this.Router.navigateByUrl('/login');
    }
    this.getProductById();
  }
  getProductById() {
    this.router.params.subscribe(param => {
      this.ProductService.getProducById(param.productID).subscribe(data => {
        this.product = data;
        this.productPreview = data;
        this.productPreview.image = data.image.toString();
        console.log(this.productPreview)
      })
    })
  }
  updatePro() {
    this.ProductService.updateProduct(this.product).subscribe(data => {
      this.Router.navigateByUrl("/admin/list-product");
      console.log(this.product.image);
    });

  }
  updateProduct() {

    this.ProductService.updateProduct(this.product).subscribe(data => {
      this.Router.navigateByUrl("/admin/list-product");
      console.log(this.product.image);
    });
    
  }

  sendData() {
    this.product = this.form.value;
    this.product.image = this.productPreview.image;
    this.product.image = this.product.image.toString();
    this.ProductService.updateProduct(this.product).subscribe(data => {
      this.Router.navigateByUrl("/admin/list-product");
      console.log(this.product.image);
      console.log(this.product)
    });
  }
  ///validation
  // Lưu ảnh dưới dạng base64
  url: string | ArrayBuffer;
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.product.image = this.url.toString();
        // this.productPreview.image = this.url.toString();
        // this.product.image = this.productPreview.image;
      }
    }
  }

  //function validate
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('[0-9]*')]),
    image: new FormControl(''),
    descriptor: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
  }

}
