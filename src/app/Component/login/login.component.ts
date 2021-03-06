import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user: UserService,private rout:Router,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      
  });
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.loginForm.value);

    if(this.loginForm.valid){
      let reqdata = {
        email: this.loginForm.value.Email,
        password: this.loginForm.value.Password,
      }
      this.user.login(reqdata).subscribe((Response: any)=>{
        console.log(Response);
        localStorage.setItem("token", Response.data.token);
        this.snackBar.open('Login Successfully..!!!','..', {
          duration: 3000,
        })
        this.rout.navigateByUrl('/dashboard/getallbook');
      });
    }
   
  }
}
