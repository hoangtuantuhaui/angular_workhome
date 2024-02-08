import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Iemployee{
  id: any,
  name: any,
  email: any,
  description: any
}
@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  @Input() tableDataValues:  any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
