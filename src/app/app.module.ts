import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

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

@NgModule({
  declarations: [
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
