import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
 @Input() book: any;

 constructor(){
}

  ngOnInit(): void {
  console.log(this.book);
  }


}
