import {Component, inject, input, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ImageService} from '@http/image-service';
import {JournalService} from '@http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-animal-image-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './animal-image-form.html',
  styleUrl: './animal-image-form.scss'
})
export class AnimalImageForm {
  private service = inject(ImageService);
  private journalService = inject(JournalService);
  id = input.required<string>();
  animalResource = rxResource({
      params : () => ({id: this.id()}),
      stream: ({params}) => {
        return this.journalService.getAnimalImages(params.id)
      }
  });

  files =signal<File[]> ([]);
  animalImageForm = new FormGroup({
    image1: new FormControl<File | null>(null),
    image2: new FormControl<File | null>(null),
    image3: new FormControl<File | null>(null),
  })

  onFileChange(event: Event, controlName: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.animalImageForm.get(controlName)?.setValue(input.files[0]);
      this.files.set([...this.files(), input.files[0]]);
    }
  }

 onSubmit() {
   this.service.postAnimalImages(this.animalResource.value()!.data!.id!,this.files()).subscribe();
 }
}
