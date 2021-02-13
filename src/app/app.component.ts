import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: any;
  date: any;
  currency: any;

  onNameChange(value: any){
    this.name = value.target.value;
    //console.log(this.name);
  }

  onDateChange(value:any){
    this.date = value.target.value;
  }

  onCurrencyChange(value:any){
    this.currency = value.target.value;
  }
}
