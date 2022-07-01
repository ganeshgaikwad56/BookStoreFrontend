import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  BookArray: any;
Book:any;
  constructor(private Allbook:BookService,private router:Router) { }

  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook() {    // Api integartion for api notes 
    this.Allbook.getallBook().subscribe(
      (response: any) => {


        this.BookArray = response.response;
        console.log(response);
        //this.BookArray.reverse();
       
      })
      
  }
  lowtohigh(){
    this.BookArray= this.BookArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }
  hightolow(){
    this.BookArray= this.BookArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.BookArray.reverse();
  }
  quickview(Book:any){  
    localStorage.setItem('bookId', Book.bookId); 
    this.router.navigateByUrl('dashboard/quickview')
  }
}
