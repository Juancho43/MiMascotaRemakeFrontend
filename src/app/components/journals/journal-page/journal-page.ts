import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from '@app/components/shared/button/button';
import {JournalMenu} from '@app/components/journals/journal-menu/journal-menu';
import {OverlayService} from '@services/utils/overlay.service';

@Component({
  selector: 'app-journal-page',
  imports: [
    RouterOutlet,
    Button,
    JournalMenu,


  ],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.scss',
  standalone: true,
})
export default class JournalPage {

  private overlapService=inject(OverlayService);

  checkViewPort(){
    return window.innerWidth <= 600;
  }
  openMenu() {
      this.overlapService.open(JournalMenu, this.overlapService.createCenterPositionStrategy());
  }
}
