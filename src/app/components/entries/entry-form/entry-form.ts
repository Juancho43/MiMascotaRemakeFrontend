import {Component, inject, input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {EntryService} from '@http/entry-service';
import {Entry} from '@core/interfaces/model/entry';

@Component({
  selector: 'app-entry-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './entry-form.html',
  styleUrl: './entry-form.scss'
})
export default class EntryForm {
  readonly id = input.required<string>();
  private service = inject(EntryService); // Assuming you have an EntryService to handle form submissions
  entryForm = new FormGroup({
    title: new FormControl<string | null>(null),
    content: new FormControl<string | null>(null),
    date: new FormControl<Date | null>(null),
  })

  onSubmit() {

    console.log('Form submitted:', this.toEntry());
  }
    toEntry() : Entry {
      return{
        journal_id: this.id(),
        title: this.entryForm.get('title')?.value!,
        content: this.entryForm.get('content')?.value!,
        date: this.entryForm.get('date')?.value ? new Date(this.entryForm.get('date')?.value!) : new Date(),
      };
    }
}
