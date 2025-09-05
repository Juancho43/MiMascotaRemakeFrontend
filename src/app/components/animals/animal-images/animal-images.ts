import {Component, computed, effect, inject, input} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {JournalService} from '@http/journal-service';
import {environment} from '@environments/environment.development';
import {DialogService} from '@services/utils/dialog-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {EventService} from '@services/context/event-service';

@Component({
  selector: 'app-animal-images',
  imports: [],
  templateUrl: './animal-images.html',
  styleUrl: './animal-images.scss'
})
export class AnimalImages {
  protected readonly environment = environment;
  private eventService = inject(EventService);
  private service = inject(JournalService);
  private dialogService = inject(DialogService);
  readonly slug = input.required<string>();
  readonly animalId = input.required<string>();
  animalImagesResource = rxResource({
    params: () => ({slug:this.slug()}),
    stream: ({params}) => this.service.getAnimalImages(params.slug),
  })
  reload = computed(()=>this.eventService.getEvents()())

  constructor() {
    effect(() => {
      this.reload();
      const reloadEvents = this.reload();
      if (
        reloadEvents.length > 0 &&
        (
          reloadEvents[reloadEvents.length - 1]?.action === 'create' ||
          reloadEvents[reloadEvents.length - 1]?.action === 'delete'
        ) &&
        reloadEvents[reloadEvents.length - 1]?.entity === 'AnimalImage'
      ){
        this.animalImagesResource.reload();
      }
    });
  }

    onDeleteHandler(imageId:string) {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'foto'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteAnimalImage({animal_id: this.animalId(), image_id:imageId}).subscribe();
      }
    });
  }
}
