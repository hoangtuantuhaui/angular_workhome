import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, IUser } from '../shared/models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginRequest!: IUser;
  errorMessage: string = '';

  @Output() getFormValue = new EventEmitter<IUser>();

  constructor (private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.authService.buttonObservable.subscribe((e) => {
      console.log('GET api', e);
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.authService.getCustomer().subscribe((data:any) => {
      data.find((customer: User) => {
        if(customer.email == this.loginRequest.email && customer.password == this.loginRequest.password) {
          localStorage.setItem('token',customer.email)
          this.router.navigate([''])
        }
      })
    })
  }
}
