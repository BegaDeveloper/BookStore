import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  readBooks: any;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  this.getYourBooks();
  }

  //GET Your Books
  getYourBooks(){
      this.http.getReadBook().subscribe((res) => {
         return this.readBooks = res;
      })
  }

  //Delete Book
  deleteTheBook(book: any){
     this.http.deleteBook(book.id).subscribe((res) => {
     alert('Book deleted...');
     this.getYourBooks();
     })
  }

}
