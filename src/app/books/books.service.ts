import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { Book } from './shared/models/book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  buttonSubject: Subject<any> = new Subject();
  buttonObservable = this.buttonSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>  {
    return this.http.get<Book[]>('http://localhost:3000/books')
  }
}
