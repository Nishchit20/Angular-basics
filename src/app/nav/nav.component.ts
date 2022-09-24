import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
//Cart count
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sitename:string = "MyShop"
  amazon_icon:string = "./assets/Images/icon.jpg"


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
  
  //Dependency injection
  constructor(private authService:UserService,private cartSvc:CartService) { }
  auth:boolean=false;
  //Add to cart
  cartCount: number=0;

  //Auth Service
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    //Cart count
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
  }

}
