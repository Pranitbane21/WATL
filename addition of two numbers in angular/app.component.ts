// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addition: number = 0;
  addNumber(value : any){
    this.addition = value.fnum + value.snum;
    console.log("Addition of two numbers are: ", (value.fnum + value.snum))
  }
}
