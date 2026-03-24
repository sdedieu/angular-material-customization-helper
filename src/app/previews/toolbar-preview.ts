import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-toolbar>
        <span>My Application</span>
      </mat-toolbar>
      <mat-toolbar color="primary">
        <button mat-icon-button aria-label="Menu">
          <mat-icon>menu</mat-icon>
        </button>
        <span>Primary Toolbar</span>
        <span class="flex-1"></span>
        <button mat-icon-button aria-label="Search">
          <mat-icon>search</mat-icon>
        </button>
        <button mat-icon-button aria-label="More">
          <mat-icon>more_vert</mat-icon>
        </button>
      </mat-toolbar>
      <mat-toolbar color="accent">
        <span>Accent Toolbar</span>
      </mat-toolbar>
    </div>
  `,
  styles: ['.flex-1 { flex: 1 1 auto; }'],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
})
export class ToolbarPreviewComponent {}
