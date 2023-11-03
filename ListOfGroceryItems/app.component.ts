// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr : any = [];
  addGrocery(item : any){
    console.log(item)
    this.arr.push(item.grocery)
  }
}
