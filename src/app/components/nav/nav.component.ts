import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
isLoading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Loading Routes
  loadHome(){
      this.isLoading = true;
      this.router.navigate(['home']);
      this.isLoading = false;
   }

   loadMyBooks(){
       this.isLoading = true;
       this.router.navigate(['my-books']);
       this.isLoading = false;
   }

    loadAddBook(){
        this.isLoading = true;
        this.router.navigate(['add-book']);
        this.isLoading = false;
    }

}
