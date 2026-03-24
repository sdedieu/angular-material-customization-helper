import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-preview',
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex gap-2 flex-wrap">
        <button mat-button>Basic</button>
        <button mat-raised-button>Raised</button>
        <button mat-flat-button>Flat</button>
        <button mat-stroked-button>Stroked</button>
      </div>
      <div class="flex gap-2 flex-wrap">
        <button mat-button color="primary">Primary</button>
        <button mat-raised-button color="primary">Raised Primary</button>
        <button mat-flat-button color="primary">Flat Primary</button>
        <button mat-stroked-button color="primary">Stroked Primary</button>
      </div>
      <div class="flex gap-2 flex-wrap">
        <button mat-button color="warn">Warn</button>
        <button mat-raised-button color="warn">Raised Warn</button>
      </div>
      <div class="flex gap-2 flex-wrap">
        <button mat-icon-button aria-label="Favorite">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button color="primary" aria-label="Home">
          <mat-icon>home</mat-icon>
        </button>
        <button mat-button disabled>Disabled</button>
      </div>
    </div>
  `,
  imports: [MatButtonModule, MatIconModule],
})
export class ButtonPreviewComponent {}
