import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { WashingmachinedealsComponent } from './washingmachine/washingmachinedeals/washingmachinedeals.component';
import { TelevisionComponent } from './television/television.component';
import { DealsComponent } from './deals/deals.component';
import { MyshopdealsComponent } from './deals/myshopdeals/myshopdeals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { ShoedealsComponent } from './shoes/shoedeals/shoedeals.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

@NgModule({
  declarations: [
    AllproductsComponent,
    AppComponent,
    HomeComponent,
    NavComponent,
    CardComponent,
    SearchComponent,
    RefrigeratorComponent,
    MicroovenComponent,
    WashingmachineComponent,
    AdvertisementsComponent,
    AllproductsComponent,
    WashingmachinedealsComponent,
    TelevisionComponent,
    DealsComponent,
    MyshopdealsComponent,
    CounterComponent,
    CounterchildComponent,
    ShoedealsComponent,
    ShoesComponent,
    ContactComponent,
    ProductdetailsComponent,
    RegisterComponent,
    LoginComponent,
    CartItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
