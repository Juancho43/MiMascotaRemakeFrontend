import {Component, input, output} from '@angular/core';
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
  readonly report = input.required<Report>();
  result = output<string>();
  onCancel() {
    this.result.emit('Dismissed');
  }

  onValidate() {
    this.result.emit('Resolved');
  }

  getStatusClass() {
    return undefined;
  }
}
