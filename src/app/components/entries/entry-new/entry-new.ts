import {Component} from '@angular/core';
import {EntryForm} from '@app/components/entries/entry-form/entry-form';
import {Button} from '@app/components/shared/button/button';
import {BackButton} from '@app/components/shared/back-button/back-button';


@Component({
  selector: 'app-entry-new',
  imports: [
    EntryForm,
    Button,
    BackButton
  ],
  templateUrl: './entry-new.html',
  standalone: true,
  styleUrl: './entry-new.scss'
})
export default class EntryNew {

  protected readonly navigator = window.history;

  onBackHandler() {
    this.navigator.back();
  }
}
