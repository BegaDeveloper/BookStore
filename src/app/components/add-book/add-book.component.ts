import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookInfo } from 'src/app/services/book-info.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  selectedFile: any;
  addForm: FormGroup;
  bookInfo: BookInfo = new BookInfo();


  constructor(private api: HttpClient ,private http: HttpService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
     this.addForm = this.fb.group({
        title: [''],
        author: [''],
        comment: ['']


     });
  }

  //onFileSelected(event: any){
    // this.selectedFile = <File>event.target.files[0];
  //}

  //onUpload(){
  // const fd = new FormData();
  //  fd.append('image', this.selectedFile, this.selectedFile.name )
  //  this.http.post('http://localhost:3000/books', fd).subscribe((res) => {
   //    console.log(res);
  //   })
 // }

  //POST book
  postTheBook(){
     this.bookInfo.author = this.addForm.value.author;
     this.bookInfo.title = this.addForm.value.title;
     this.bookInfo.comment = this.addForm.value.comment;


     this.http.postBook(this.bookInfo).subscribe((val) => {
       console.log(val);
       this.addForm.reset();
       this.route.navigate(['my-books']);

     });
  }




}
