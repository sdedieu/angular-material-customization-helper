import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-optgroup-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-form-field>
        <mat-label>Pokemon</mat-label>
        <mat-select>
          <mat-optgroup label="Grass">
            <mat-option value="bulbasaur">Bulbasaur</mat-option>
            <mat-option value="oddish">Oddish</mat-option>
          </mat-optgroup>
          <mat-optgroup label="Water">
            <mat-option value="squirtle">Squirtle</mat-option>
            <mat-option value="psyduck">Psyduck</mat-option>
          </mat-optgroup>
          <mat-optgroup label="Fire" disabled>
            <mat-option value="charmander">Charmander</mat-option>
          </mat-optgroup>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  imports: [MatFormFieldModule, MatSelectModule],
})
export class OptgroupPreviewComponent {}
