import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Component/signup/signup.component';
import { LoginComponent } from './Component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetComponent } from './Component/forget/forget.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResetComponent } from './Component/reset/reset.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { GetallbookComponent } from './Component/getallbook/getallbook.component';
import {MatSelectModule} from '@angular/material/select';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MycartComponent } from './Component/mycart/mycart.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    DashboardComponent,
    GetallbookComponent,
    QuickviewComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,MatToolbarModule,MatSnackBarModule,
    BrowserAnimationsModule,MatFormFieldModule,MatCardModule,MatInputModule,MatIconModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
