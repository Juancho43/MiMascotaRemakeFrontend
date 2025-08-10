import {inject, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Overlay} from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialog = inject(MatDialog);
  private overlay = inject(Overlay);
  openDialog<T>(component: any, data?: T) {
    return this.dialog.open(component, {
      scrollStrategy: this.overlay.scrollStrategies.close(),
      width: '400px',
      data: data,
      panelClass: 'custom-dialog-container'
    });
  }


  closeAllDialogs(): void {
    this.dialog.closeAll();
  }
  closeDialog(dialogRef: any): void {
    if (dialogRef) {
      dialogRef.close();
    }
  }

}
