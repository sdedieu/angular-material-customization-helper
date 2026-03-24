import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-form-field>
        <mat-label>Favorite food</mat-label>
        <mat-select [(ngModel)]="food">
          <mat-option value="steak">Steak</mat-option>
          <mat-option value="pizza">Pizza</mat-option>
          <mat-option value="tacos">Tacos</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Multi-select</mat-label>
        <mat-select multiple [(ngModel)]="toppings">
          <mat-option value="extra-cheese">Extra Cheese</mat-option>
          <mat-option value="mushroom">Mushroom</mat-option>
          <mat-option value="onion">Onion</mat-option>
          <mat-option value="pepperoni">Pepperoni</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Disabled</mat-label>
        <mat-select disabled>
          <mat-option value="none">None</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  imports: [MatSelectModule, MatFormFieldModule, FormsModule],
})
export class SelectPreviewComponent {
  food = 'pizza';
  toppings: string[] = [];
}
