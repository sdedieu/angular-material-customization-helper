import { Component } from '@angular/core';
import { MatPseudoCheckboxModule, MatPseudoCheckboxState } from '@angular/material/core';

@Component({
  selector: 'app-pseudo-checkbox-preview',
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <mat-pseudo-checkbox state="unchecked" />
        <span>Unchecked</span>
      </div>
      <div class="flex items-center gap-3">
        <mat-pseudo-checkbox state="checked" />
        <span>Checked</span>
      </div>
      <div class="flex items-center gap-3">
        <mat-pseudo-checkbox state="indeterminate" />
        <span>Indeterminate</span>
      </div>
      <div class="flex items-center gap-3">
        <mat-pseudo-checkbox state="checked" />
        <span>Disabled checked</span>
      </div>
      <div class="flex items-center gap-3 cursor-pointer" (click)="toggle()">
        <mat-pseudo-checkbox [state]="interactive" />
        <span>Click to toggle ({{ interactive }})</span>
      </div>
    </div>
  `,
  imports: [MatPseudoCheckboxModule],
})
export class PseudoCheckboxPreviewComponent {
  interactive: MatPseudoCheckboxState = 'unchecked';

  toggle() {
    this.interactive = this.interactive === 'checked' ? 'unchecked' : 'checked';
  }
}
