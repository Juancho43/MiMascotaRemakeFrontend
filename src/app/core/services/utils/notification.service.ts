import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  showNotification(message: string, action = 'Close', duration = 3000) {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  showSuccessNotification(message : string = '¡Operación exitosa!') {
    this.showNotification(message, 'Cerrar', 3000);
  }
  showErrorNotification(message: string = '¡Hubo un error!') {
    this.showNotification(message, 'Cerrar', 3000);
  }
}
