import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
token:any;
  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem("token")
  }
  getallBook() {
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Book/GetAllBook', true, header)
  }
  addfeedback(data:any){
    this.token = localStorage.getItem('token')
    console.log(data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
     
    }
    console.log(data);
    return this.httpService.postService('Feedback/AddFeedback',data, true, header)

  }
  getfeedBack(BookId:any) {
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService(`Feedback/GetFeedback/${BookId}`, true, header)
  }
  addtocart(data:any){
    this.token = localStorage.getItem('token')
    console.log(data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
     
    }
    console.log(data);
    return this.httpService.postService('Cart/AddCart',data, true, header)

  }


  getCart(){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Cart/GetCartDetailsByUserid', true, header)
  }
  deletecart(cartId:any){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService(`Cart/DeleteBook/${cartId}`, true, header)
  }
  updatecartitem(cartId:any,data:any){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Cart/UpdateCart/${cartId}`,data, true, header)
  }

  addtowishlist(data:any){
    this.token = localStorage.getItem('token')
    console.log(data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
     
    }
    console.log(data);
    return this.httpService.postService('WishList/AddWishList',data, true, header)
  }

  getWishlist(){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('WishList/GetWishlistDetailsByUserid', true, header)
  }
  deletewish(wishlistId:any){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService(`WishList/DeleteWishList/${wishlistId}`, true, header)
  }
  GetOrder(){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Order/GetAllOrder', true, header)
  }
  getAddress(){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Address/ GetAllAddresses', true, header)
  }
  addToOrder(data:any){
    this.token = localStorage.getItem('token')
    console.log(data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
     
    }
    console.log(data);
    return this.httpService.postService('Order/AddOrder',data, true, header)
  }
}
