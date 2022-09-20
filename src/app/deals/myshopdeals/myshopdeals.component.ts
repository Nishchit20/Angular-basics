import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";

@Component({
  selector: 'app-myshopdeals',
  templateUrl: './myshopdeals.component.html',
  styleUrls: ['./myshopdeals.component.css']
})
export class MyshopdealsComponent implements OnInit {

  all:any=(alldeals as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
