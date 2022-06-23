import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
  });
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.forgetForm.value);

    if(this.forgetForm.valid){
      let reqdata = {
        Email: this.forgetForm.value.Email,
      }
      console.log(reqdata,"Line ts 28")
      this.user.forget(reqdata).subscribe((Response: any)=>{
        console.log(Response);
      });
    }
  }
}
