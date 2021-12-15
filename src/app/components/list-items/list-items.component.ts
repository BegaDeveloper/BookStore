import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  @Input() searchValue: any;
  allBooks: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
   this.getBooks();
  }

  getBooks(){
     this.http.getAllBooks().subscribe((res: any) => {
        this.allBooks = res;
        console.log(res);
     });
  }

}
