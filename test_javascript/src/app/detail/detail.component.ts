import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  price =399000;
  src = [
    {img_id: 1,url:"https://cf.shopee.vn/file/d4fbe0e60caeb997e1bd24126ccec5cf"},
    {img_id: 2,url:"https://dony.vn/wp-content/uploads/2021/07/ao-so-mi-nu-ban-nhieu-trn-tang-tmdt-viet-1.jpg"},
    {img_id: 3,url:"https://lzd-img-global.slatic.net/g/p/0f2d9ede901e0bcd123715e4f7daad29.jpg_720x720q80.jpg_.webp"},
    {img_id: 4,url:"https://triscy.com/wp-content/uploads/2020/02/1f510db48e651cef5d72860c7b9d43b9.jpg"}
  ]
  ImagePath = 'https://cf.shopee.vn/file/d4fbe0e60caeb997e1bd24126ccec5cf';

  Imagehover(n:any) {
    var filter_array = this.src.filter(x => x.img_id == n);
    filter_array.forEach(element => {this.ImagePath = element.url
    });
  }
}
