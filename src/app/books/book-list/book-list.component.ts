import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BooksService) {}
  books: Book[] = [];

  ngOnInit(): void {
    this.bookService.buttonObservable.subscribe((e) => {
      console.log('GET api', e);
    });

    this.bookService.getAll().subscribe((e) => {
      console.log(e);
      this.books = e;
    },
    (error: any) => {
      console.error('Error fetching books:', error);
    });
  }

}
