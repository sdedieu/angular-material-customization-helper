import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-badge-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-icon matBadge="4" matBadgeColor="accent">home</mat-icon>
      <mat-icon matBadge="99+" matBadgeColor="warn">notifications</mat-icon>
      <button mat-raised-button matBadge="8" matBadgePosition="before" matBadgeColor="accent">
        Action
      </button>
      <mat-icon matBadge="4" matBadgeDisabled>mail</mat-icon>
    </div>
  `,
  imports: [MatBadgeModule, MatIconModule, MatButtonModule],
})
export class BadgePreviewComponent {}
