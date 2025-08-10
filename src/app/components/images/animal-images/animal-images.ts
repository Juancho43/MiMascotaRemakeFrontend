import {Component, effect, inject, signal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {JournalContextService} from '@services/context/journal-context-service';
import {JournalService} from '@http/journal-service';
import {Journal} from '@model/model/journal';
import {environment} from '@environments/environment.development';
import {DialogService} from '@services/utils/dialog-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {Button} from '@app/components/shared/button/button';

@Component({
  selector: 'app-animal-images',
  imports: [
    Button
  ],
  templateUrl: './animal-images.html',
  styleUrl: './animal-images.scss'
})
export class AnimalImages {
  protected readonly environment = environment;
  private context = inject(JournalContextService);
  private service = inject(JournalService);
  private dialogService = inject(DialogService);
  journal = signal<Journal>({} as Journal);
  imageId =signal('');
  animalImagesResource = rxResource({
    params: () => ({id: this.journal()? this.journal()!.id! : ''}),
    stream: ({params}) => this.service.getAnimalImages(params.id),
  })
  constructor() {
      this.journal = this.context.getJournal();
    effect(() => {
    });
  }

  onDeleteHandler(imageId:string) {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'foto'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(imageId);
        this.service.deleteAnimalImage({animal_id: this.journal().animal.id!, image_id:imageId}).subscribe();
      }
    });
  }
}
