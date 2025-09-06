import {Component, input} from '@angular/core';
import {Report} from '@services/http/reports-service';
import {DatePipe, NgClass} from '@angular/common';
@Component({
  selector: 'app-reported-post',
  imports: [
    NgClass,
    DatePipe
  ],
  templateUrl: './reported-post.html',
  styleUrl: './reported-post.scss'
})
export class ReportedPost {
  onCancel() {
      throw new Error("Method not implemented.");
  }
  readonly report = input.required<Report>();

  onValidate() {

  }

  getStatusClass() {
    return undefined;
  }
}
