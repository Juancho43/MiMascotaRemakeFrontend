import {Component, inject, input, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {EntryService} from '@http/entry-service';
import {Entry} from '@core/interfaces/model/entry';
import {JournalContextService} from '@services/utils/journal-context-service';

@Component({
  selector: 'app-entry-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './entry-form.html',
  styleUrl: './entry-form.scss'
})
export default class EntryForm {
  private journalContext = inject(JournalContextService);
  private service = inject(EntryService); // Assuming you have an EntryService to handle form submissions
  edit = signal<boolean>(false);
  journal = this.journalContext.getJournal();
  entryForm = new FormGroup({
    title: new FormControl<string | null>(null),
    content: new FormControl<string | null>(null),
    date: new FormControl<string | null>(null),
    journal_id: new FormControl<number | null>(null)
  })

  onSubmit() {
    if (!this.edit()) {
      this.service.create(this.toEntry()).subscribe({
        next: (response) => {
          console.log('Entry created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating entry:', error);
        }
      });
    }else{
      this.service.update(this.toEntry()).subscribe({
        next: (response) => {
          console.log('Entry updated successfully:', response);
        },
        error: (error) => {
          console.error('Error updating entry:', error);
        }
      });
    }

    console.log('Form submitted:', this.toEntry());
  }
    toEntry() : Entry {
      return{
        journal_id: this.journal()!.id!,
        title: this.entryForm.get('title')?.value!,
        content: this.entryForm.get('content')?.value!,
        date: this.entryForm.get('date')?.value! ,
      };
    }
}
