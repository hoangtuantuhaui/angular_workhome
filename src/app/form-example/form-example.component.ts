import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  Temployee = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    email: new FormControl()
  });

  @Output() formValue = new EventEmitter<any>();

  ngOnInit() {}

  createEmployee(){
      this.formValue.emit(this.Temployee.value);
  }

}
