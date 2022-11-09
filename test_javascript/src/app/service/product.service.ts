import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  CategoryDetails=[
    {
      "id": 1,
      "title": "Áo quần",
      "url": "https://cdn-icons-png.flaticon.com/512/2935/2935183.png",
    },
    {
      "id": 2,
      "title": "Sách",
      "url": "https://cdn3.iconfinder.com/data/icons/minecraft-icons/512/Book.png",
    },
    {
      "id": 3,
      "title": "dụng cụ nấu ăn",
      "url": "https://cdn-icons-png.flaticon.com/512/1530/1530504.png",
    },
    {
      "id": 4,
      "title": "Laptop",
      "url": "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/device-laptop-icon.png",
    },
    {
      "id": 5,
      "title": "Thức ăn",
      "url": "https://cdn-icons-png.flaticon.com/512/5141/5141534.png",
    },
    {
      "id": 6,
      "title": "Sắc đẹp",
      "url": "https://cdn-icons-png.flaticon.com/512/64/64877.png",
    },
    {
      "id": 7,
      "title": "xe máy",
      "url": "https://cdn-icons-png.flaticon.com/512/3721/3721619.png",
    },
    {
      "id": 8,
      "title": "Thể thao",
      "url": "https://cdn-icons-png.flaticon.com/512/53/53283.png",
    },
    {
      "id": 9,
      "title": "Đồ chơi",
      "url": "https://cdn-icons-png.flaticon.com/512/3082/3082060.png",
    },
    {
      "id": 10,
      "title": "Giặt giũ",
      "url": "https://cdn-icons-png.flaticon.com/512/1104/1104590.png",
    },
    {
      "id": 11,
      "title": "Du lịch",
      "url": "https://cdn-icons-png.flaticon.com/512/4312/4312298.png",
    },
    {
      "id": 12,
      "title": "Đồng hồ",
      "url": "https://cdn-icons-png.flaticon.com/512/306/306836.png",
    },

  ]
  ProductDetails=[
    {
      "albumId": 1,
      "id": 1,
      "title": "Áo len croptop ngắn tay chống nhăn trắng ALISSA TOP/WH",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952",
      "category" : "fashion"
    },
    {
      "albumId": 2,
      "id": 2,
      "title": "BỐT THỜI TRANG NỮ BOOT XỎ NGÓN HỞ MŨI CHẤT DA MỀM",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/771796",
      "category" : "fashion"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "TAI PHONE NGHE NHẠC BLUETOOTH - TAI NGHE BLUETOOTH BEAT TM 010",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355",
      "category" : "stuff"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "Chuột Gaming Chuột Chơi Game Logitech G102 Led RGB 8000DPI Bảo Hành 12 Tháng",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776",
      "category" : "fstuff"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "nón rộng vành mũ rộng vành đi biển chống tia UV thời trang Hàn Quốc",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
      "category" : "fashion"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "Nồi chống dính Ceramic 20cm an toàn Comet CH31-20",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2",
      "category" : "fstuff"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "Điện thoại Apple iPhone 11 Chính hãng VN/A",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc",
      "category" : "stuff"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "đầm nữ xòe dáng ngắn cổ tròn tay ngắn thiết kể trẻ trung thích hợp cho các buổi tiệc",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f",
      "category" : "fashion"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "giày thể thao nam nike zom cao cấp 2099 full hộp tặng kèm tất",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97",
      "category" : "fashion"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "KÍNH GỌNG DẺO UNISEX - KÍNH TRONG SUỐT NAM NỮ THỜI TRANG CHỐNG BỤI GIẢ CẬN",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14",
      "category" : "stuff"
    },
    {
      "albumId": 1,
      "id": 11,
      "title": "Đồng Hồ Nam CRNAIRA CRA039 Mặt Siêu Mỏng Doanh Nhân 2020",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4",
      "category" : "stuff"
    },
    {
      "albumId": 1,
      "id": 12,
      "title": "Nước Hoa Nữ Chanel Coco Mademoiselle EDP 100ml - Chanel Coco Hồng",
      "price":399.000,
      "url": "https://i.pinimg.com/736x/c2/a5/e2/c2a5e2156eeb68abbbfe01e68ef41d54.jpg",
      "thumbnailUrl": "https://via.placeholder.com/150/66b7d2",
      "category" : "fashion"
    },

  ]

  acounts = [
    {
      "id" :"123",
      "role" : "admin",
      "username" : "admin1",
      "password" : "12345"
    },
    {
      "id" :"124",
      "role" : "admin",
      "username" : "admin2",
      "password" : "12345"
    },
    {
      "id" :"125",
      "role" : "shop",
      "username" : "shop1",
      "password" : "12345"
    },
    {
      "id" :"126",
      "role" : "shop",
      "username" : "shop2",
      "password" : "12345"
    },
    {
      "id" :"127",
      "role" : "user",
      "username" : "user1",
      "password" : "12345"
    },
    {
      "id" :"128",
      "role" : "user",
      "username" : "user2",
      "password" : "12345"
    },
    {
      "id" :"129",
      "role" : "user",
      "username" : "user3",
      "password" : "12345"
    },
  ]


  getProductById(id1:any)
  {
    console.clear();
    // id1 = 99;
    var filter_array = this.ProductDetails.filter(x => x.id == id1);
    console.log(filter_array);
    if (filter_array.length == 0) {
      console.log("khong co du lieu");
      //  block of code to be executed if the condition is true
    }
    return filter_array;
  }
}
