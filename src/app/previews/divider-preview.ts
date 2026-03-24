import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-divider-preview',
  template: `
    <div class="flex flex-col gap-4 max-w-xs">
      <mat-list>
        <mat-list-item>Item 1</mat-list-item>
        <mat-divider />
        <mat-list-item>Item 2</mat-list-item>
        <mat-divider />
        <mat-list-item>Item 3</mat-list-item>
      </mat-list>
      <mat-divider />
      <p>Below a horizontal divider</p>
      <div class="flex h-12 items-center gap-2">
        <span>Left</span>
        <mat-divider [vertical]="true" class="h-full" />
        <span>Right</span>
      </div>
    </div>
  `,
  imports: [MatDividerModule, MatListModule],
})
export class DividerPreviewComponent {}
