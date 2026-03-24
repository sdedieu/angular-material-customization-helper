import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-paginator
        [length]="100"
        [pageSize]="10"
        [pageSizeOptions]="[5, 10, 25, 100]"
        (page)="handlePageEvent($event)"
        showFirstLastButtons
        aria-label="Select page"
      />
      @if (pageEvent) {
        <p class="text-sm text-gray-400">
          Page: {{ pageEvent.pageIndex + 1 }} | Page size: {{ pageEvent.pageSize }}
        </p>
      }
    </div>
  `,
  imports: [MatPaginatorModule],
})
export class PaginatorPreviewComponent {
  pageEvent?: PageEvent;
  handlePageEvent(event: PageEvent) {
    this.pageEvent = event;
  }
}
