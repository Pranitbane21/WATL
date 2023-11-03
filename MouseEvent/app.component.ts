// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked');
  }

  handleMouseOver() {
    console.log('Mouse over the div');
  }

  handleMouseMove(event: MouseEvent) {
    console.log(`Mouse moved at X: ${event.clientX}, Y: ${event.clientY}`);
  }

  handleMouseDown() {
    console.log('Mouse button down');
  }

  handleMouseUp() {
    console.log('Mouse button up');
  }

  handleMouseEnter() {
    console.log('Mouse entered the element');
  }

  handleMouseLeave() {
    console.log('Mouse left the element');
  }
}
