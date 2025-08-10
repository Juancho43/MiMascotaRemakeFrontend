import {Component, inject, input, linkedSignal, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ImageService} from '@http/image-service';
import {JournalService} from '@http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {AnimalImages} from '@app/components/images/animal-images/animal-images';
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
export class AnimalImageForm {
  private service = inject(ImageService);
  private journalService = inject(JournalContextService);
  journal = linkedSignal(this.journalService.getJournal());

  file =signal<File> ({}as File);
  animalImageForm = new FormGroup({
    image: new FormControl<File | null>(null),

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
