import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-preview',
  template: `
    <div class="flex gap-4 flex-wrap">
      <button mat-button [matMenuTriggerFor]="menu">Open Menu</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>dialpad</mat-icon>
          <span>Redial</span>
        </button>
        <button mat-menu-item>
          <mat-icon>voicemail</mat-icon>
          <span>Check voicemail</span>
        </button>
        <button mat-menu-item disabled>
          <mat-icon>notifications_off</mat-icon>
          <span>Disable alerts (disabled)</span>
        </button>
      </mat-menu>

      <button mat-icon-button [matMenuTriggerFor]="iconMenu" aria-label="More options">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #iconMenu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
      </mat-menu>
    </div>
  `,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
})
export class MenuPreviewComponent {}
