import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chip-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-chip-set>
        <mat-chip>Apple</mat-chip>
        <mat-chip>Banana</mat-chip>
        <mat-chip>Cherry</mat-chip>
        <mat-chip disabled>Disabled</mat-chip>
      </mat-chip-set>
      <mat-chip-set>
        <mat-chip color="primary" highlighted>Primary</mat-chip>
        <mat-chip color="accent" highlighted>Accent</mat-chip>
        <mat-chip color="warn" highlighted>Warn</mat-chip>
      </mat-chip-set>
      <mat-chip-listbox aria-label="Fish selection">
        <mat-chip-option>Salmon</mat-chip-option>
        <mat-chip-option>Tuna</mat-chip-option>
        <mat-chip-option selected>Tilapia</mat-chip-option>
      </mat-chip-listbox>
    </div>
  `,
  imports: [MatChipsModule, MatIconModule],
})
export class ChipPreviewComponent {}
