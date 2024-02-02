import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData: any[] = [];
  getDataFromSubmit(data : any[]){
    this.formData = [...this.formData||[], data]
    // this.formData.push(data)
  }
}
