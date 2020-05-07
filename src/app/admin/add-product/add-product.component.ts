import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { UploadImageService } from "../../service/upload-image.service";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  //save  image with imgur
  imageFile: File;


  //Biến product có kiểu dữ liệu Product
  products: Product[];
  page = 1;
  pageSize = 10;
  product: Product = new Product();
  productPreview: Product = new Product();
  imgnase: String;
  searchText;
  content = '';
  islogined = false;
  currentUser: any;
  imagesTemp: string;

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private userService: UserService,
    private token: TokenStorageService,
    private imageService: UploadImageService
  ) {

  }

  ngOnInit(): void {

    if (this.token.getUser()) {
      this.currentUser = true;
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
  //method add new product
  async addNewProduct() {
    let image_res = await this.imageService.uploadImage(this.imageFile);
    this.product = this.form.value;
    // console.log(image);
    this.product.image = image_res["data"].link;

    console.log("Đay là anh là upload" + this.product.image)
    this.ProductService.addNewProduct(this.product).subscribe(data => {
      this.getProductList();
      this.product = new Product;

      this.router.navigateByUrl('/admin/list-product');

    });
  }
  // delete product 
  deleteProduct(id) {
    this.ProductService.deleteProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id != response.id)
    })

  }

  //function validate
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9a-zA-Z]+$')]),
    price: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('[0-9]*')]),
    image: new FormControl('', [Validators.required]),
    descriptor: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z]+$')])
  });

  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
  }
  //validate form

  //function save image with imgur
  imageInputChange(imageInput: any) {

    this.imageFile = imageInput.files[0];
    //Preview image 
    const reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.imagesTemp = reader.result as string;
    };
  }
  //add image
  addImage() {
    return this.imageService.uploadImage(this.imageFile);
  }
}
