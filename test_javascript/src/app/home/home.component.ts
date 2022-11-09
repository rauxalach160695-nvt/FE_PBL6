import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productData:any;
  photoData:any;
  banners = [{id:1},{id:2}]

  constructor(private  productService : ProductService) { }

  ngOnInit(): void {
    this.productData =this.productService.ProductDetails;
    this.photoData = this.productService.CategoryDetails;
  }



}
