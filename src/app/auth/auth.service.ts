import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { User, IUser } from './shared/models/user';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {
    buttonSubject: Subject<any> = new Subject();
    buttonObservable = this.buttonSubject.asObservable();
    
    constructor(private http: HttpClient, handler: HttpHandler, router: Router) { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        if(token) {
            return true;
        }
        return false;
    }

    getCustomer() {
        return this.http.get<User>(`http://localhost:3000/user`);
    }

    createCustomer(data: User) {
        return this.http.post<any>(`http://localhost:3000/user`, {
            ...data,
        });
    }
}
