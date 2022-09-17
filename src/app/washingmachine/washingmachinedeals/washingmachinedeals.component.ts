import { Component, OnInit } from '@angular/core';
import * as wm from "../washingmachine.json";

@Component({
  selector: 'app-washingmachinedeals',
  templateUrl: './washingmachinedeals.component.html',
  styleUrls: ['./washingmachinedeals.component.css']
})
export class WashingmachinedealsComponent implements OnInit {

  wmachine:any=(wm as any).default;

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
