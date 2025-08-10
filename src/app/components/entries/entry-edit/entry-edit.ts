import {Component, inject} from '@angular/core';
import {EntryForm} from '@app/components/entries/entry-form/entry-form';
import {EntryContext} from '@services/context/entry-context.service';
import {BackButton} from '@app/components/shared/back-button/back-button';

@Component({
  selector: 'app-entry-edit',
  imports: [

    EntryForm,
    BackButton
  ],
  templateUrl: './entry-edit.html',
  standalone: true,
  styleUrl: './entry-edit.scss'
})
export default class EntryEdit {
  private context = inject(EntryContext);


  getEntry() {
    return this.context.getEntry();
  }

}
