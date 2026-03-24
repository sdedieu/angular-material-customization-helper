import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-list-preview',
  template: `
    <div class="flex flex-col gap-4 max-w-sm">
      <mat-list role="list">
        <mat-list-item role="listitem">
          <mat-icon matListItemIcon>inbox</mat-icon>
          <span matListItemTitle>Inbox</span>
          <span matListItemLine>5 new messages</span>
        </mat-list-item>
        <mat-divider />
        <mat-list-item role="listitem">
          <mat-icon matListItemIcon>send</mat-icon>
          <span matListItemTitle>Sent</span>
        </mat-list-item>
        <mat-divider />
        <mat-list-item role="listitem">
          <mat-icon matListItemIcon>delete</mat-icon>
          <span matListItemTitle>Trash</span>
        </mat-list-item>
      </mat-list>
      <mat-selection-list>
        <mat-list-option value="shoes">Shoes</mat-list-option>
        <mat-list-option value="socks" selected>Socks</mat-list-option>
        <mat-list-option value="gloves">Gloves</mat-list-option>
      </mat-selection-list>
    </div>
  `,
  imports: [MatListModule, MatIconModule, MatDividerModule],
})
export class ListPreviewComponent {}
