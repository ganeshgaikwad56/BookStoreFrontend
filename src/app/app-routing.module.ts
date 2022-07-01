import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { GetallbookComponent } from './Component/getallbook/getallbook.component';
import { LoginComponent } from './Component/login/login.component';
import { MycartComponent } from './Component/mycart/mycart.component';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { ResetComponent } from './Component/reset/reset.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  
  {path: 'signup', component:SignupComponent},
  { path: 'login', component:LoginComponent },
  {path: 'forget', component:ForgetComponent},
  {path : 'reset/:token', component:ResetComponent},
  {path: 'dashboard', component:DashboardComponent,
  children:[
    {path:'getallbook', component:GetallbookComponent},
    {path:'quickview',component:QuickviewComponent},
    {path:'mycart', component:MycartComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
