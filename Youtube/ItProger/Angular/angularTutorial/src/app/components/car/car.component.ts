import { Component, OnInit } from '@angular/core';
import { Color } from './Color';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  model: string = "BMW";
  speed: number = 0;
  color: Color = {
    car: 'white',
    salon: 'black',
    wheel: 'silver'
  }

  options: string[] = ['option1', 'option2', 'option3', 'option4']

  constructor() { }

  ngOnInit(): void {
    this.model = 'audi';
    this.speed = 12;
  }

  changeCar(): void {
    this.model = "BMW - changed";
    this.speed = 234;
  }

}
