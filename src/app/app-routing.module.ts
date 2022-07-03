import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { GetallbookComponent } from './Component/getallbook/getallbook.component';
import { LoginComponent } from './Component/login/login.component';
import { MycartComponent } from './Component/mycart/mycart.component';
import { OrderComponent } from './Component/order/order.component';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { ResetComponent } from './Component/reset/reset.component';
import { SignupComponent } from './Component/signup/signup.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';

const routes: Routes = [
  
  {path: 'signup', component:SignupComponent},
  { path: 'login', component:LoginComponent },
  {path: 'forget', component:ForgetComponent},
  {path : 'reset/:token', component:ResetComponent},
  {path: 'dashboard', component:DashboardComponent,
  children:[
    {path:'getallbook', component:GetallbookComponent},
    {path:'quickview',component:QuickviewComponent},
    {path:'mycart', component:MycartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'order',component:OrderComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
