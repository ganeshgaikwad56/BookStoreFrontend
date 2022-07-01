import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartArray:any;
  constructor(private bookService:BookService) { }

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
}
