import {Component, effect, inject, input, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {EntryService} from '@http/entry-service';
import {Entry} from '@core/interfaces/model/entry';
import {JournalContextService} from '@services/context/journal-context-service';

@Component({
  selector: 'app-entry-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './entry-form.html',
  standalone: true,
  styleUrl: './entry-form.scss'
})
export class EntryForm {
  private journalContext = inject(JournalContextService);
  private service = inject(EntryService); // Assuming you have an EntryService to handle form submissions
  readonly edit = input<boolean>(false);
  readonly entryToEdit = input<Entry | null>(null);
  journal = this.journalContext.getJournal();
  entryForm = new FormGroup({
    title: new FormControl<string | null>(null),
    content: new FormControl<string | null>(null),
    date: new FormControl<string | null>(null),
    journal_id: new FormControl<string | null>(null)
  })

    constructor() {
      effect(() => {
        if (this.edit()) this.toForm(this.entryToEdit()!);
      });
    }

    onSubmit() {
      if (!this.edit()) {
        this.service.create(this.toEntry()).subscribe();
      }else{
        this.service.update(this.toEntry()).subscribe();
      }
    }
    toForm(entry: Entry) {
      this.entryForm.patchValue({
        title: entry.title,
        content: entry.content,
        date: entry.date,
        journal_id: entry.journal_id
      })
    }

    toEntry() : Entry {
      return{
        id: this.edit() ? this.entryToEdit()!.id : undefined,
        journal_id: this.journal()!.id!,
        title: this.entryForm.get('title')?.value!,
        content: this.entryForm.get('content')?.value!,
        date:this.entryForm.get('date')?.value! ,
        user_id: this.journal()!.user_id
      };
    }
}
