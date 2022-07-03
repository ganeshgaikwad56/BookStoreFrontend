import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  OrderArray:any;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getOrder();
   
  }
  getOrder() {
    this.bookService.GetOrder().subscribe((response: any) => {
      console.log(response);
      this.OrderArray = response.response;
      console.log("Order Array",this.OrderArray);

    });
  }
}
