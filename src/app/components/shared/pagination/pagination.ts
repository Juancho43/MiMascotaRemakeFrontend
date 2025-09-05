import {Component, input, output} from '@angular/core';

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
      console.log(page);
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
  nextPage(){
   const nextPage = Number(this.currentPage()) + 1;
    if (nextPage <= this.totalPages) {
      this.changePage(nextPage);
    }
  }

  previousPage() {
    const previousPage = this.currentPage() - 1;
    if (previousPage >= 1) {
      this.changePage(previousPage);
    }
  }
  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  protected readonly length = length;
}
