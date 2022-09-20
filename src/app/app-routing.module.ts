import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { DealsComponent } from './deals/deals.component';
import { MyshopdealsComponent } from './deals/myshopdeals/myshopdeals.component';
import { HomeComponent } from './home/home.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { TelevisionComponent } from './television/television.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'card', component: CardComponent},
  { path:'fridge', component: RefrigeratorComponent},
  { path:'washingmachine', component: WashingmachineComponent},
  { path:'microoven', component: MicroovenComponent},
  { path:'television', component: TelevisionComponent},
  { path:'deals', component: DealsComponent},
  { path:'watch', component: TelevisionComponent},
  { path:'myshop', component: MyshopdealsComponent},
  { path:'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

