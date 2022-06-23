import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './Component/forget/forget.component';
import { LoginComponent } from './Component/login/login.component';
import { ResetComponent } from './Component/reset/reset.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  
  {path: 'signup', component:SignupComponent},
  { path: 'login', component:LoginComponent },
  {path: 'forget', component:ForgetComponent},
  {path : 'reset/:token', component:ResetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
