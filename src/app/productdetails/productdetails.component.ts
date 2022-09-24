import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from '../product-model';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  formValue!: FormGroup;
  productModelObj : ProductModel = new ProductModel();
  productData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
 
  constructor(private formbuilder: FormBuilder, private api:ProductapiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      pname:[''],
      pdescription:[''],
      price:[''],
      image:['']
    })
    this.getProducts();
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.image = this.formValue.value.image;

    this.api.postProducts(this.productModelObj).subscribe(res=>{
      console.log(res);
      alert("New product added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }

  getProducts(){
    this.api.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }

  deleteProducts(product: any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      alert("The Product deleted!")
      this.getProducts();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.pid = product.pid;
    this.formValue.controls['pname'].setValue(product.pname);
    this.formValue.controls['pdescription'].setValue(product.pdescription);
    this.formValue.controls['price'].setValue(product.price);
    this.formValue.controls['img'].setValue(product.image);
  }

  updateProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.image = this.formValue.value.image;
    this.api.updateProducts(this.productModelObj, this.productModelObj.pid).subscribe(res=>{
      alert("The product updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    })
  }
}