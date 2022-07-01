import { Component, OnInit, VERSION } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  BookId: any;
  Book: any;
  rating:any;
  comment:any;
  booksArray:any;
  show=false;
  quantity:any;
  constructor(private bookService:BookService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem("bookId");
    console.log(this.BookId);
    this.getAllBook();
  }
  hideAndShow() {
    console.log("calling hide");
    this.show = !this.show;

  }
  getAllBook() {
    this.bookService.getallBook().subscribe((response: any) => {
      response.response.forEach((element: any) => {
        if (element.bookId == this.BookId) {
          this.Book = element;
          this.getFeedback();
          console.log(this.Book);
        }
      });
    })
  }
  addFeedback() {
    let data = {
      rating: this.rating,
      comment: this.comment,
      bookId: this.BookId
    }
    console.log(data)
    this.bookService.addfeedback(data).subscribe((response: any) => {
      console.log("User Feedback", response);
      this.getFeedback();
      this.snackBar.open('Feedback Added Successfully..!!!','..', {
        duration: 3000,
      })
    },error=>{console.log(error)})
  }
  getFeedback() {
    this.bookService.getfeedBack(this.BookId).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.booksArray = response.response;
      console.log(this.booksArray);
    });
  }
  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
  AddToBag(){
    let data = {
      bookQuantity: this.value,
      bookId: this.BookId
    }
    console.log(data)
    this.bookService.addtocart(data).subscribe((response: any) => {
      console.log("User Feedback", response);
      this.getFeedback();
      this.snackBar.open('Book Added in Cart Successfully..!!!','..', {
        duration: 3000,
      })
    },error=>{console.log(error)})
  
  }
}
