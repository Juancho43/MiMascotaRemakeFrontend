import {Component, inject, linkedSignal, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ImageService} from '@http/image-service';
import {AnimalImages} from '@app/components/animals/animal-images/animal-images';
import {JournalContextService} from '@services/context/journal-context-service';

@Component({
  selector: 'app-animal-image-form',
  imports: [
    ReactiveFormsModule,
    AnimalImages
  ],
  templateUrl: './animal-image-form.html',
  styleUrl: './animal-image-form.scss'
})
export default class AnimalImageForm {
  private service = inject(ImageService);
  private journalService = inject(JournalContextService);
  journal = linkedSignal(this.journalService.getJournal());

  file =signal<File> ({}as File);
  animalImageForm = new FormGroup({
    image: new FormControl<File | null>(null, Validators.required),

  })

  onFileChange(event: Event, controlName: string) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      this.animalImageForm.get(controlName)?.setValue(input.files[0]);
      this.file.set( input.files[0]);
    }
  }

 onSubmit() {
   this.service.postAnimalImages(this.journal().animal.id!,this.file()).subscribe();
 }
}
