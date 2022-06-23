import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private user: UserService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('token')
    this.resetForm = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPaasword: ['', [Validators.required, Validators.minLength(6)]],
      
  });
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.resetForm.value);

    if(this.resetForm.valid){
      let reqdata = {
        newPassword: this.resetForm.value.Password,
        confirmPassword: this.resetForm.value.ConfirmPaasword,
      }
      this.user.reset(reqdata,this.token).subscribe((Response: any)=>{
        console.log(Response);
        
      });
    }
  }
}
