import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sitename:string = "MyShop"
  amazon_icon:string = "./assets/Images/icon.jpg"

  eventHandler(){
    alert("Please check whether the credentials are correct")
  }


  productentered: string=' '  //Laptop


  //Event
  clickHandler(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
