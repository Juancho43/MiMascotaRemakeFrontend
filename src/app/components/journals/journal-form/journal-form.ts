import {Component, effect, inject, input, OnInit, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JournalService} from '@http/journal-service';
import {Journal} from '@model/model/journal';

@Component({
  selector: 'app-journal-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './journal-form.html',
  standalone: true,
  styleUrl: './journal-form.scss'
})
export class JournalForm  implements OnInit {
  private service = inject(JournalService);
  journalToEdit = input<Journal>();
  edit = input(false);
  onSubmitted = output<Journal>();
  journalForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    color: new FormControl(''),
    gender: new FormControl(<'male'|'female'>'male'),
    birthdate : new FormControl(<string|null> null),
    size: new FormControl(<'tiny' | 'small' | 'medium' | 'large' | 'extra-large'>'medium'),
    breed: new FormControl(''),
    weight: new FormControl(0),
    journal_id: new FormControl<string | undefined>(undefined),
    user_id: new FormControl<string | undefined>(undefined),
//TODO: make validations
  });

  constructor() {
    effect(() => {
    if (this.edit()) this.setForm();

    });

  }
  ngOnInit() {


  }
  setForm(){

    const animal = this.journalToEdit()!.animal;


      this.journalForm.patchValue({
        name: animal.name,
        description: animal.description,
        color: animal.color,
        gender: animal.gender,
        size: animal.size || 'medium',
        breed: animal.breed || '',
        weight:animal.weight || 0,
        journal_id: this.journalToEdit()!.id! ,
        birthdate: animal.birthdate!,
        user_id: this.journalToEdit()!.user_id!
      })



  }
  onSubmit() {
    if (!this.edit()){
      this.service.postJournal(this.toJournalData()).subscribe({
        next: (res) => {
          this.onSubmitted.emit(res.data!);
        }
      });
    }else{
      this.service.putJournal(this.toJournalData()).subscribe(
        {
          next: (res) => {
            this.onSubmitted.emit(res.data!);

          }
        }
      );

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
        user_id: this.journalForm.get('user_id')!.value!,
      }
    }
  }
}
