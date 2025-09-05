import {Component, input} from '@angular/core';
import {Animal} from '@model/model/animal';
import {NgOptimizedImage} from '@angular/common';
import {environment} from '@environments/environment.development';

@Component({
  selector: 'app-journal-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './journal-card.html',
  styleUrl: './journal-card.scss'
})
export class JournalCard {
  readonly journal = input.required<Animal>();
  protected readonly environment = environment;
}
