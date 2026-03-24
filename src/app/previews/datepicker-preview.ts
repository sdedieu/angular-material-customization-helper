import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" [formControl]="dateCtrl" />
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker" />
        <mat-datepicker #picker />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Disabled datepicker</mat-label>
        <input matInput [matDatepicker]="picker2" disabled />
        <mat-datepicker-toggle matIconSuffix [for]="picker2" />
        <mat-datepicker #picker2 />
      </mat-form-field>
    </div>
  `,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
})
export class DatepickerPreviewComponent {
  dateCtrl = new FormControl(new Date());
}
