import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon-button-preview',
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex gap-3 flex-wrap items-center">
        <button mat-icon-button aria-label="Home">
          <mat-icon>home</mat-icon>
        </button>
        <button mat-icon-button color="primary" aria-label="Favorite">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button color="accent" aria-label="Bookmark">
          <mat-icon>bookmark</mat-icon>
        </button>
        <button mat-icon-button color="warn" aria-label="Delete">
          <mat-icon>delete</mat-icon>
        </button>
        <button mat-icon-button disabled aria-label="Block">
          <mat-icon>block</mat-icon>
        </button>
      </div>
      <div class="flex gap-3 flex-wrap items-center">
        <button mat-mini-fab aria-label="Add">
          <mat-icon>add</mat-icon>
        </button>
        <button mat-mini-fab color="accent" aria-label="Edit">
          <mat-icon>edit</mat-icon>
        </button>
        <button mat-mini-fab color="warn" aria-label="Warning">
          <mat-icon>warning</mat-icon>
        </button>
      </div>
    </div>
  `,
  imports: [MatButtonModule, MatIconModule],
})
export class IconButtonPreviewComponent {}
