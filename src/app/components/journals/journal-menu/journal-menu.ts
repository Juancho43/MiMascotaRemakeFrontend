import {Component, input} from '@angular/core';
import {Button} from '@app/components/shared/button/button';
import {BackButton} from '@app/components/shared/back-button/back-button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-journal-menu',
  imports: [
    Button,
    BackButton,
    NgClass
  ],
  templateUrl: './journal-menu.html',
  styleUrl: './journal-menu.scss'
})
export class JournalMenu {
   overlay = input(false)
}
