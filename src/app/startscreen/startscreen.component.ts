import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Game } from 'src/models/game';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss'],
})
export class StartscreenComponent {
  imagePath = 'assets/img/startscreen.jpg';

  constructor(private firestore: AngularFirestore, private router: Router) {}

  newGame() {
    const game = new Game();
    this.firestore
      .collection('games')
      .add(game.toJSON())
      .then((gameInfo: any) => {
        this.router.navigateByUrl(`/game/${gameInfo.id}`);
      });
  }
}
