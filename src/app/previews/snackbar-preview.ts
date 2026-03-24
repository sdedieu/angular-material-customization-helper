import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-snackbar-preview',
  template: `
    <div class="flex gap-3 flex-wrap">
      <button mat-raised-button (click)="openSnackBar('Message sent!', 'Undo')">
        Open Snackbar
      </button>
      <button mat-raised-button color="primary" (click)="openSnackBar('Item deleted.', 'Restore')">
        With Action
      </button>
      <button mat-raised-button color="warn" (click)="openSnackBar('Something went wrong.', 'OK')">
        Error Style
      </button>
    </div>
  `,
  imports: [MatButtonModule],
})
export class SnackbarPreviewComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 3000 });
  }
}
