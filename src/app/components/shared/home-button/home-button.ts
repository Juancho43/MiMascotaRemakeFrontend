import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Button} from '@app/components/shared/button/button';

@Component({
  selector: 'app-home-button',
  imports: [
    RouterLink,
    Button
  ],
  templateUrl: './home-button.html',
  styleUrl: './home-button.scss'
})
export class HomeButton {

}
