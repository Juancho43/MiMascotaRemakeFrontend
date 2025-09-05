import {Component, input} from '@angular/core';
import {Button} from '@app/components/shared/button/button';

@Component({
  selector: 'app-back-button',
  imports: [
    Button
  ],
  templateUrl: './back-button.html',
  standalone: true,
  styleUrl: './back-button.scss'
})
export class BackButton {

  protected readonly history = window.history;
  readonly label = input('Volver');
  readonly tooltip = input('Volver a la página anterior');

  onBackHandler() {
    this.history.back();
  }

}
