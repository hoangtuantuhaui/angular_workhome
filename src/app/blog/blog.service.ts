import { Injectable } from '@angular/core';
import { Hero } from './housinglocation';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private heroesUrl = 'http://localhost:3000/posts'; 
  
  constructor(
    // private http: HttpClient
    ) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

}
