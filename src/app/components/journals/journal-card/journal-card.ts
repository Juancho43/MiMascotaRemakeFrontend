import {Component, input} from '@angular/core';
import {Animal} from '@model/model/animal';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-journal-card',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './journal-card.html',
  styleUrl: './journal-card.scss'
})
export class JournalCard {
  readonly journal = input.required<Animal>();
}
