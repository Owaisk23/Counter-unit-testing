import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  counter: number;

  constructor() { 
    this.counter = 1;
  }

  increment(){
    this.counter++;
  }


  decrement(){
    this.counter--;
  }

}
