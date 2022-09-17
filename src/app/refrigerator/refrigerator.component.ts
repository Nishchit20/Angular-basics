import { Component, OnInit } from '@angular/core';
import * as refrigerator from "../data/refrigerator.json";



@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {

  fridge:any=(refrigerator as any).default;

  productDetail=false;
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }

  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-down';
    }
    else{
      content='fa-solid fa-arrow-up';
    }
    return content;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
