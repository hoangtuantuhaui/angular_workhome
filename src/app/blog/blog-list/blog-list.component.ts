import { Component, OnInit } from '@angular/core';
import { Hero } from '../housinglocation';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  hero: Hero = {
    id: 9999,
    title: 'Test Home',
    shortdes: 'Short Description',
    // author: 'Test city',
    // shortdes: 'Short Description',
    // description: 'Description',
    // photo: `${this.baseUrl}/example-house.jpg`,
  };

  heroes: Hero[] = [];
  
  constructor(private heroService: BlogService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
