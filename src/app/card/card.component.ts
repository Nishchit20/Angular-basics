import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  productdetails: any[] = [
    {
      "pid":"001",
      "image":"../assets/Images/Fastrack.jpg",
      "pname": "Fastrack",
      "pdescription":"Grey analog Black leather Strap Watch",
      "status": "In Stock",
      "price" : "2495"
    },
    {
      "pid":"002",
      "image":"../assets/Images/Buds.jpg",
      "pname": "Samsung Ear Earbuds",
      "pdescription":"Samsung Galaxy Buds Pro 99% Noise Cancellation,Black",
      "status": "Out of Stock",
      "price" : "7999"
    },
    {
      "pid":"003",
      "image":"../assets/Images/Laptop.jpg",
      "pname": "Lenovo",
      "pdescription":"Lenovo IdeaPad Slim 3 Intel Core i3 11th Gen 14'' ",
      "status": "In Stock",
      "price" : "36690"
    },
    {
      "pid":"004",
      "image":"../assets/Images/oneplus.jpg",
      "pname": "One Plus Nord CE",
      "pdescription":"OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage) ",
      "status": "In Stock",
      "price" : "18990"
    },
    {
      "pid":"005",
      "image":"../assets/Images/minotelap.jpg",
      "pname": "Mi Notebook Pro",
      "pdescription":" Qhd+ IPS Anti Glare Display Intel Core I5-11300H 11Th Gen Laptop ",
      "status": "Out of Stock",
      "price" : "59990"
    },
    {
      "pid":"006",
      "image":"../assets/Images/invertor.jpg",
      "pname": "Hisense Refrigirator",
      "pdescription":" Hisense Inverter Frost-Free Multi-Door with Water Dispenser ",
      "status": "In Stock",
      "price" : "63990"
    },
    {
      "pid":"007",
      "image":"../assets/Images/wmachine.webp",
      "pname": "Lg washing machine",
      "pdescription":" LG 6 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine",
      "status": "In Stock",
      "price" : "24990"
    },
    {
      "pid":"008",
      "image":"../assets/Images/msaspi.webp",
      "pname": "Microsoft surface laptop",
      "pdescription":" Microsoft Surface Laptop Studio - 14.4'' Touchscreen - Intel® Core™ i7 ",
      "status": "Out of Stock",
      "price" : "209990"
    },
    {
      "pid":"009",
      "image":"../assets/Images/boat.jpg",
      "pname": "boAt Smart Watch",
      "pdescription":" boAt Wave Lite Smartwatch with 1.69 HD Display, HR & 7 Days Battery Life",
      "status": "In Stock",
      "price" : "4990"
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
