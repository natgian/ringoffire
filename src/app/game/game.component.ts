import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = "";
  game!: Game;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  pickCard() {
    if (this.game.stack.length === 0) return;

    if(!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';

      console.log("New card:", this.currentCard);
      console.log(this.game);
  
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.currentCard);
      }, 1000);
    }
  }
}

