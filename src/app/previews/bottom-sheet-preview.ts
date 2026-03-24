import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bottom-sheet-content',
  template: `
    <mat-nav-list>
      <a mat-list-item (click)="dismiss()">
        <mat-icon matListItemIcon>phone</mat-icon>
        <span matListItemTitle>Phone</span>
      </a>
      <a mat-list-item (click)="dismiss()">
        <mat-icon matListItemIcon>email</mat-icon>
        <span matListItemTitle>Email</span>
      </a>
      <a mat-list-item (click)="dismiss()">
        <mat-icon matListItemIcon>share</mat-icon>
        <span matListItemTitle>Share</span>
      </a>
    </mat-nav-list>
  `,
  imports: [MatBottomSheetModule, MatListModule, MatIconModule],
})
export class BottomSheetContentComponent {
  constructor(private bottomSheet: MatBottomSheet) {}
  dismiss() {
    this.bottomSheet.dismiss();
  }
}

@Component({
  selector: 'app-bottom-sheet-preview',
  template: `
    <div class="flex gap-3">
      <button mat-raised-button (click)="open()">Open Bottom Sheet</button>
    </div>
  `,
  imports: [MatButtonModule],
})
export class BottomSheetPreviewComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  open() {
    this.bottomSheet.open(BottomSheetContentComponent);
  }
}
