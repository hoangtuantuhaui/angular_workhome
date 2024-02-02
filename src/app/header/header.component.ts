import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    // this.isLoggedIn$ = this.authService.isLoggedIn();
    console.log(localStorage.getItem('token'))
  }

  public logout(): void {
    localStorage.clear();
    localStorage.setItem('redirectUrl', this.router.url);
    this.router.navigate(['login'])
  }

}
