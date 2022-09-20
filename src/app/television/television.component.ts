import { Component, OnInit } from '@angular/core';
import * as tv from "../data/television.json";

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

  television:any = (tv as any).default

  productDetail=false;
  showtvdetailsToggle()
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
