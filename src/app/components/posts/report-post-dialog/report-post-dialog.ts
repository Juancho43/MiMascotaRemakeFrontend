import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {ReportsService} from '@http/reports-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {MatButton} from '@angular/material/button';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-report-post-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatRadioGroup,
    MatRadioButton,
    FormsModule
  ],
  templateUrl: './report-post-dialog.html',
  styleUrl: './report-post-dialog.scss'
})
export class ReportPostDialog {
  data = inject(MAT_DIALOG_DATA);

  private reportsService = inject(ReportsService);
  reasons = rxResource({stream:()=>this.reportsService.getReportReasons()});
  selectedReason: string = '';
}
