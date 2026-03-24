import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-option-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-form-field>
        <mat-label>Favorite food</mat-label>
        <mat-select>
          <mat-option value="steak">Steak</mat-option>
          <mat-option value="pizza">Pizza</mat-option>
          <mat-option value="tacos">Tacos</mat-option>
          <mat-option value="sushi" disabled>Sushi (unavailable)</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  imports: [MatFormFieldModule, MatSelectModule],
})
export class OptionPreviewComponent {}
