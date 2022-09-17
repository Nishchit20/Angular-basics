import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'card', component: CardComponent},
  { path:'fridge', component: RefrigeratorComponent},
  { path:'washingmachine', component: WashingmachineComponent},
  { path:'microoven', component: MicroovenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

