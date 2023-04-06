import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() setNumber = new EventEmitter<number>();
  incresNumber: number = 0;
  interval: any;
  // start the game and increse number every time by one and send back to parant comp. data
  startGame() {
    console.log(this.setNumber);
    this.interval = setInterval(() => {
      this.setNumber.emit(this.incresNumber + 1);
      this.incresNumber++;
    }, 1000);
  }
  endGame() {
    clearInterval(this.interval);
  }
}
