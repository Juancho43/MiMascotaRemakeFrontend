import {Component, input, output, signal} from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [

  ],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {
  readonly totalItems = input.required<number>();
  readonly currentPage = input.required<number>();
  readonly maxItems = input<number>(3);

  pageChange = output<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems() / this.maxItems());
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {

      this.pageChange.emit(page);
    }
  }

}
