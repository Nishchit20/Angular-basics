import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sitename:string = "MyShop"
  amazon_icon:string = "./assets/Images/icon.jpg"

  clickHandler(){
    alert("Please check whether the credentials are correct")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
