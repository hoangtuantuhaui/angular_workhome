import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) {
    
  }

  @Output() getFormValue = new EventEmitter<User>();

  ngOnInit(): void {
    this.authService.buttonObservable.subscribe((e) => {
      console.log('GET api', e);
    });

    this.registerForm = this.fb.group ({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: 'customer'
    })
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.createCustomer(this.registerForm.getRawValue()).subscribe((e) => {});
    this.getFormValue.emit(this.registerForm.getRawValue());
  }

}
