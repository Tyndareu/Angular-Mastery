import { Component } from '@angular/core';

@Component({
  selector: 'counter-component',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  counter = 10;

  sumNumber(value: number) {
    this.counter += value;
  }

  subNumber(value: number) {
    this.counter -= value;
  }

  resetNumber() {
    this.counter = 10;
  }
}
