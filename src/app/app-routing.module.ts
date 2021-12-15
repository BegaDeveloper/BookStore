import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { BookItemComponent } from './components/list-items/book-item/book-item.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {SpinnerComponent} from './components/spinner/spinner.component';

const routes: Routes = [
 {path: 'book-item', component: BookItemComponent},
 {path: 'footer', component: FooterComponent},
 {path: 'home', component: HomeComponent},
 {path: 'list-items', component: ListItemsComponent},
 {path: 'my-books', component: MyBooksComponent},
 {path: 'nav', component: NavComponent},
 {path: 'add-book', component: AddBookComponent},
 {path: 'spinner', component: SpinnerComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ BookItemComponent, FooterComponent, HomeComponent, ListItemsComponent, MyBooksComponent, NavComponent, AddBookComponent, SpinnerComponent ];
