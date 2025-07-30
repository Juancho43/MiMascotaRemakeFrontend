import {Component, inject, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JournalService} from '@http/journal-service';
import {Journal} from '@model/model/journal';
import {Router} from '@angular/router';
import {JournalContextService} from '@services/utils/journal-context-service';

@Component({
  selector: 'app-journal-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './journal-form.html',
  styleUrl: './journal-form.scss'
})
export default class JournalForm  implements OnInit {
  private service = inject(JournalService);
  private journalContext = inject(JournalContextService);

  private router = inject(Router);
  edit = signal(false);
  journalForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    color: new FormControl(''),
    gender: new FormControl(<'male'|'female'>'male'),
    birthdate : new FormControl(<string|null> null),
    size: new FormControl(<'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'>'medium'),
    breed: new FormControl(''),
    weight: new FormControl(0),
    journal_id: new FormControl<string | undefined>(undefined),
  });

  ngOnInit() {

    this.edit.set(this.router.url.includes('edit'));
    if (this.edit()) this.setForm();
  }
  setForm(){
    let journal = this.journalContext.getJournal();
    if (journal) {

    let animal = journal()!.animal;
    console.log(journal());
      this.journalForm.patchValue({
        name: animal.name,
        description: animal.description,
        color: animal.color,
        gender: animal.gender,
        size: animal.size || 'medium',
        breed: animal.breed || '',
        weight:animal.weight || 0,
        journal_id: journal()!.id! ,
        birthdate: animal.birthdate!
      })
    }


  }
  onSubmit() {
    if (!this.edit){
      this.service.postJournal(this.toJournalData()).subscribe();
    }else{
      this.service.putJournal(this.toJournalData()).subscribe({
        next: (response) => {
          this.router.navigate(['/journals', response.data!.journal_id]);
        },
      });

    }
  }

  toJournalData() : Journal {
    return {
      animal: {
        name: this.journalForm.get('name')?.value || '',
        description: this.journalForm.get('description')?.value || '',
        color: this.journalForm.get('color')?.value || '',
        gender: this.journalForm.get('gender')?.value || "male",
        birthdate: this.journalForm.get('birthdate')?.value!,
        size: this.journalForm.get('size')?.value || "medium",
        weight: this.journalForm.get('weight')?.value || 0,
        breed: this.journalForm.get('breed')?.value || '',
        journal_id: this.journalForm.get('journal_id')!.value!,
      }
    }
  }
}
