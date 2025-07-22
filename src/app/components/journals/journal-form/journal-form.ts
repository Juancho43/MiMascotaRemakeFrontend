import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JournalService} from '@http/journal-service';
import {Journal} from '@model/model/journal';

@Component({
  selector: 'app-journal-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './journal-form.html',
  styleUrl: './journal-form.scss'
})
export default class JournalForm {
  private service = inject(JournalService);

  journalForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    color: new FormControl(''),
    gender: new FormControl(<'male'|'female'>'male'),
    birthdate : new FormControl(<Date|null> null),
    size: new FormControl(<'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'>'medium'),
    breed: new FormControl(''),
    weight: new FormControl(0),
  });

  onSubmit() {
    this.service.postJournal(this.toJournalData()).subscribe();
  }

  toJournalData() : Journal {
    return {
      animal: {
        name: this.journalForm.get('name')?.value || '',
        description: this.journalForm.get('description')?.value || '',
        color: this.journalForm.get('color')?.value || '',
        gender: this.journalForm.get('gender')?.value || "male",
        birthdate: this.journalForm.get('birthdate')?.value || new Date(),
        size: this.journalForm.get('size')?.value || "medium",
        weight: this.journalForm.get('weight')?.value || 0,
        breed: this.journalForm.get('breed')?.value || '',
      }
    }
  }
}
