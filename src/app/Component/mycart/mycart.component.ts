import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartArray: any;
  
  constructor(private bookService: BookService) { }

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
      });
    
  }
}