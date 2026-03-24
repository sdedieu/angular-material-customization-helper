import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-timepicker-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-form-field>
        <mat-label>Choose a time</mat-label>
        <input matInput type="time" />
      </mat-form-field>
    </div>
  `,
  imports: [MatFormFieldModule, MatInputModule],
})
export class TimepickerPreviewComponent {}
