import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  registration(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
console.log("19 line data",reqdata)
    return this.httpService.postService('User/Registration', reqdata, false, header)
  }
  login(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }

    return this.httpService.postService('User/UserLogin', reqdata, false, header)
  }
  forget(reqdata: any) {
    console.log(reqdata,"services 34");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
console.log(reqdata)
    return this.httpService.postService(`User/ForgotPassword/${reqdata.Email}`, reqdata, false, header)
  }
  reset(reqdata: any,token:any) {
    console.log(reqdata,"services 45");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
console.log(reqdata)
    return this.httpService.putService(`User/ResetPassword/${reqdata.newPassword}/${reqdata.confirmPassword}`, reqdata, true, header)
  }
}
