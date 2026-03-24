import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-preview',
  template: `
    <div class="flex flex-col gap-3">
      <mat-checkbox [(ngModel)]="checked">Basic checkbox</mat-checkbox>
      <mat-checkbox [(ngModel)]="checked" color="primary">Primary checkbox</mat-checkbox>
      <mat-checkbox [(ngModel)]="checked" color="warn">Warn checkbox</mat-checkbox>
      <mat-checkbox [indeterminate]="true">Indeterminate</mat-checkbox>
      <mat-checkbox disabled>Disabled</mat-checkbox>
      <mat-checkbox disabled [checked]="true">Disabled checked</mat-checkbox>
    </div>
  `,
  imports: [MatCheckboxModule, FormsModule],
})
export class CheckboxPreviewComponent {
  checked = true;
}
