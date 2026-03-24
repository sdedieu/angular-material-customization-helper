import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-preview',
  template: `
    <mat-form-field>
      <mat-label>Pick a fruit</mat-label>
      <input type="text" matInput [matAutocomplete]="auto" [formControl]="ctrl" />
      <mat-autocomplete #auto="matAutocomplete">
        @for (option of options; track option) {
          <mat-option [value]="option">{{ option }}</mat-option>
        }
      </mat-autocomplete>
    </mat-form-field>
  `,
  imports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class AutocompletePreviewComponent {
  ctrl = new FormControl('');
  options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
}
