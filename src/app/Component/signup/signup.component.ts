import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user: UserService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      MobileNumber: ['', Validators.required]
  })
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      let reqdata = {
        fullName: this.registerForm.value.FullName,
        email: this.registerForm.value.Email,
        password: this.registerForm.value.Password,
        mobileNumber: this.registerForm.value.MobileNumber,
      }
      console.log("Show line 34",reqdata)
      this.user.registration(reqdata).subscribe((Response: any)=>{
        console.log(Response);
        this.snackBar.open('User Added Successfully..!!!','..', {
          duration: 3000,
        })
        
      });
    }
  }
}
