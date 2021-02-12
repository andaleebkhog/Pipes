import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: any;

  onNameChange(value: any){
    this.name = value.target.value;
    console.log(this.name);
  }
}
