import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-example-content',
  template: `
    <h2 mat-dialog-title>Example Dialog</h2>
    <mat-dialog-content>
      <p>This is the dialog content. You can put anything here.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button mat-dialog-close cdkFocusInitial>Confirm</button>
    </mat-dialog-actions>
  `,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogExampleContentComponent {}

@Component({
  selector: 'app-dialog-preview',
  template: `
    <div class="flex flex-col gap-4">
      <button mat-raised-button (click)="openDialog()">Open Dialog</button>
    </div>
  `,
  imports: [MatButtonModule],
})
export class DialogPreviewComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogExampleContentComponent, { width: '400px' });
  }
}
