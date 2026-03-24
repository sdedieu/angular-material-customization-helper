import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-radio-group [(ngModel)]="selected" class="flex flex-col gap-2">
        <mat-radio-button value="option1">Option 1</mat-radio-button>
        <mat-radio-button value="option2">Option 2</mat-radio-button>
        <mat-radio-button value="option3">Option 3</mat-radio-button>
        <mat-radio-button value="option4" disabled>Option 4 (disabled)</mat-radio-button>
      </mat-radio-group>
      <mat-radio-group class="flex flex-col gap-2">
        <mat-radio-button value="a" color="primary">Primary</mat-radio-button>
        <mat-radio-button value="b" color="accent">Accent</mat-radio-button>
        <mat-radio-button value="c" color="warn">Warn</mat-radio-button>
      </mat-radio-group>
    </div>
  `,
  imports: [MatRadioModule, FormsModule],
})
export class RadioPreviewComponent {
  selected = 'option1';
}
