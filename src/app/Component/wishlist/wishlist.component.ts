import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  ListArray:any;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getwishlist();
   
  }
  getwishlist() {
    this.bookService.getWishlist().subscribe((response: any) => {
      console.log(response);
      this.ListArray = response.response;
      console.log(this.ListArray);

    });
  }
  Remove(wishlistId: any) {
    console.log(wishlistId)
    this.bookService.deletewish(wishlistId).subscribe((response: any) => {
      console.log("User Cart", response);
      this.getwishlist();
    });
  }
}
