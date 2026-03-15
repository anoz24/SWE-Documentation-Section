import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  age: number = 28;
  isDisabled: boolean = true;
  isVisable:boolean = false;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    } ,5000)
  }

  whenClicked() {
    this.isVisable = !this.isVisable
  }

  onTyping(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
