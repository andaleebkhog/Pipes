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
  height:any;

  car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2010
  }

  onNameChange(value: any){
    this.name = value.target.value;
    //console.log(this.name);
  }

  onDateChange(value:any){
    this.date = value.target.value;
  }

  onCurrencyChange(value:any){
    this.currency = parseFloat(value.target.value);
  }

  onHeightChange(value:any){
    this.height = value.target.value;
  }
}
