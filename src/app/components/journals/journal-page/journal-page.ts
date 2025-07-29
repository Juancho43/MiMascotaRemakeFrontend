import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from '@app/components/shared/button/button';

@Component({
  selector: 'app-journal-page',
  imports: [
    RouterOutlet,
    Button,

  ],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.scss',
  standalone: true,
})
export default class JournalPage {

}
