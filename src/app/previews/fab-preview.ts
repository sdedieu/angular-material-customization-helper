import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fab-preview',
  template: `
    <div class="flex flex-col gap-4">
      <button mat-fab aria-label="Add">
        <mat-icon>add</mat-icon>
      </button>
      <button mat-mini-fab aria-label="Edit">
        <mat-icon>edit</mat-icon>
      </button>
      <button mat-fab extended>
        <mat-icon>navigation</mat-icon>
        Navigate
      </button>
    </div>
  `,
  imports: [MatButtonModule, MatIconModule],
})
export class FabPreviewComponent {}
