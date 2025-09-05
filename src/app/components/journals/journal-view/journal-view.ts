import {Component, effect, inject, input} from '@angular/core';
import {Button} from "@app/components/shared/button/button";
import {RouterOutlet} from '@angular/router';

import {JournalDetailMenu} from '@app/components/journals/journal-detail-menu/journal-detail-menu';
import {OverlayService} from '@services/utils/overlay.service';
import {JournalContextService} from '@services/context/journal-context-service';
import {JournalService} from '@http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {Journal} from '@model/model/journal';

@Component({
  selector: 'app-journal-view',
  imports: [
    Button,
    RouterOutlet,
    JournalDetailMenu
  ],
  templateUrl: './journal-view.html',
  styleUrl: './journal-view.scss'
})
export default class JournalView  {



  private overlapService=inject(OverlayService);
  private context = inject(JournalContextService);

  private service = inject(JournalService);
  readonly slug = input<string>();
  journalResource = rxResource({
    params: () => ({id: this.slug()!}),
    stream: ({params}) => this.service.getJournal(params.id),
  });

  constructor() {
    effect(() => {
      if (this.journalResource.hasValue() && !this.journalResource.isLoading()) {
        this.context.setJournal(this.toJournal());
      }
    });
  }
  toJournal(): Journal {
    return {
      journal_slug: this.slug(),
      animal: this.journalResource.value()!.data!.animal,
      entryCount: this.journalResource.value()!.data!.entryCount,
      user_id: this.journalResource.value()!.data!.user_id,
      id: this.journalResource.value()!.data!.id!,
    }

  }

    checkViewPort(){
    return window.innerWidth <= 600;
  }

  openDeleteDialog(): void {
    // const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'diário'});
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.service.deleteJournal(this.journalResource.value()!.data!.id!).subscribe();
    //   }
    // });
  }


  openMenu() {
      this.overlapService.open(JournalDetailMenu, this.overlapService.createCenterPositionStrategy());
  }
}
