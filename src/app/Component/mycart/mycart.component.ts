import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartArray: any;
  show = false;

  constructor(private bookService: BookService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getCartbook();
   
  }
  getCartbook() {
    this.bookService.getCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response;
      console.log(this.cartArray);

    });
  }
  hideAndShow() {
    console.log("calling hide")
    this.show = !this.show
  }
  Remove(cartId: any) {
    console.log(cartId)
    this.bookService.deletecart(cartId).subscribe((response: any) => {
      console.log("User Cart", response);
      this.getCartbook();
    });
  }
  minus(bookId:any,cartId:any,bookQuantity:any){
    let data={
      bookId:bookId,
      bookQuantity:bookQuantity-1
    }
    console.log(data)
    if(bookQuantity > 1)
    {
      this.bookService.updatecartitem(cartId,data).subscribe((response: any) => {
        console.log("Cart minus Successfully", response);
        this.getCartbook();
        this.snackBar.open('Cart updeted Successfully..!!!','..', {
          duration: 3000,
        })
      }); 
    }
     
  }
  plus( bookId:any,cartId:any,bookQuantity:any){
    let data={
      bookId:bookId,
      bookQuantity:bookQuantity+1
    }
    console.log(data)
    
      this.bookService.updatecartitem(cartId,data).subscribe((response: any) => {
        console.log("Cart plus Successfully", response);
        this.getCartbook();
        this.snackBar.open('Cart updeted Successfully..!!!','..', {
          duration: 3000,
        })
      });
    
  }
}