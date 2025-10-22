import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone starts drinking at the same time. You can’t stop until the person to your right stops.'},
    { title: 'You', description: 'Pick someone to drink.' },
    { title: 'Me', description: 'You have to drink.' },
    { title: 'Floor', description:
        'Everyone must touch the floor. The last person to do so drinks.',
    },
    { title: 'Guys', description: 'All guys drink.' },
    { title: 'Chicks', description: 'All girls drink.' },
    {
      title: 'Heaven',
      description:
        'Everyone points to the sky. The last person to do so drinks.',
    },
    {
      title: 'Mate',
      description:
        'Pick a drinking buddy. Whenever you drink, they must drink too.',
    },
    {
      title: 'Rhyme',
      description:
        'Say a word. The next player must say a word that rhymes. First to mess up drinks.',
    },
    {
      title: 'Categories',
      description:
        'Pick a category (e.g., beer brands). Go around naming items in that category. First to fail drinks.',
    },
    {
      title: 'Never Have I Ever',
      description:
        'Say something you’ve never done. Anyone who has done it drinks.',
    },
    {
      title: 'Question Master',
      description:
        'You are the Question Master. Anyone who answers your questions must drink. Lasts until the next Queen.',
    },
    {
      title: 'King’s Cup',
      description:
        'Pour some of your drink into the middle cup. The person who draws the last King must drink the entire cup.',
    },
  ];

  title: string = '';
  description: string = '';

  @Input() card!: string;

  ngOnChanges(): void {
    if(this.card) {
      let cardNumber = Number(this.card.split('_')[1]);
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
