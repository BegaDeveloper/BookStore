import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  //GET home page books method
  getAllBooks(){
    return this.http.get('http://localhost:3000/books').pipe(
       map ((res) => {
            return res;
      })
    );
   }

   //POST method
   postBook(data: any){
     return this.http.post('http://localhost:3000/track', data).pipe(
         map((res)=> {
             return res;
          })
       );
   }

//Get READ BOOK
   getReadBook(){
      return this.http.get('http://localhost:3000/track').pipe(
         map((res ) => {
            return res;
      })
     );
   }

   //DELETE read book
   deleteBook(id: number){
     return this.http.delete('http://localhost:3000/track/' + id).pipe(
     map((res) => {
        return res;
     })
    )
   }


  }
