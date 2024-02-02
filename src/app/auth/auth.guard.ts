// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
        localStorage.setItem('redirectUrl', this.router.url);
        this.router.navigate(['/test']);
        return true;
    } else {
      localStorage.setItem('redirectUrl', this.router.url);
      this.router.navigate(['/login']);
      return false;
    }
  }
}