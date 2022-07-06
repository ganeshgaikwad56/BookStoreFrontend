import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartArray: any;
  AddressArray:any;
  Summary=false;
  AddressId:any;
  TypeId:any;
  show=false;
  addshow=false;
  address:any;
  value:any;
  city:any;
  state:any
  constructor(private bookService: BookService, private snackBar: MatSnackBar,private rout:Router) { }

  ngOnInit(): void {
    this.getCartbook();
    this.GetAddress();

  }
  getCartbook() {
    this.bookService.getCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response;
      console.log(this.cartArray);

    });
  }
  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }
  addshowhide(){
    console.log("calling hide")
    this.addshow=!this.addshow
  }
 
  SummaryHide() {
    console.log("calling hide")
    this.Summary = !this.Summary
  }
 
  Remove(cartId: any) {
    console.log(cartId)
    this.bookService.deletecart(cartId).subscribe((response: any) => {
      console.log("User Cart", response);
      this.getCartbook();
    });
  }
  minus(bookId: any, cartId: any, bookQuantity: any) {
    let data = {
      bookId: bookId,
      bookQuantity: bookQuantity - 1
    }
    console.log(data)
    if (bookQuantity > 1) {
      this.bookService.updatecartitem(cartId, data).subscribe((response: any) => {
        console.log("Cart minus Successfully", response);
        this.getCartbook();
        this.snackBar.open('Cart updeted Successfully..!!!', '..', {
          duration: 3000,
        })
      });
    }

  }
  plus(bookId: any, cartId: any, bookQuantity: any) {
    let data = {
      bookId: bookId,
      bookQuantity: bookQuantity + 1
    }
    console.log(data)

    this.bookService.updatecartitem(cartId, data).subscribe((response: any) => {
      console.log("Cart plus Successfully", response);
      this.getCartbook();
      this.snackBar.open('Cart updeted Successfully..!!!', '..', {
        duration: 3000,
      })
    });

  }

  GetAddress(){
    this.bookService.getAddress().subscribe((response: any) => {
      console.log(response);
      this.AddressArray = response.response;
      console.log(this.AddressArray);

    });
  }
  AddToOrder(BookId:any,bookQuantity:any){
    let data = {
      bookId: BookId,
      addressId:this.AddressId,
      bookQuantity:bookQuantity,
    }
    this.bookService.addToOrder(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        this.snackBar.open('your order is Successfull', '', {
          duration: 3000,
        })
        
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.rout.navigateByUrl('/dashboard/place');
  }
  Addaddress(){
    let data={
      address:this.address,
      typeId:this.value,
      city:this.city,
      state:this.state

    }
    this.bookService.addAddress(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        this.snackBar.open('your Address added Successfully', '', {
          duration: 3000,
        })
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}