import {Component, input} from '@angular/core';
import {Button} from '@app/components/shared/button/button';
import {DeleteJournalButton} from '@app/components/journals/delete-journal-button/delete-journal-button';

@Component({
  selector: 'app-journal-detail-menu',
  imports: [
    Button,
    DeleteJournalButton
  ],
  templateUrl: './journal-detail-menu.html',
  styleUrl: './journal-detail-menu.scss'
})
export class JournalDetailMenu {
 readonly slug = input.required<string>();


}
