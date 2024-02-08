import { Component, OnInit } from '@angular/core';
import { Hero } from '../blog/housinglocation';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  formData: any[] = [];
  getDataFromSubmit(data : any[]){
    this.formData = [...this.formData||[], data]
    // this.formData.push(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
