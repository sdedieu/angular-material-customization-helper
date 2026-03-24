import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner-preview',
  template: `
    <div class="flex flex-col gap-6">
      <div class="flex gap-6 flex-wrap items-center">
        <div class="flex flex-col items-center gap-1">
          <mat-spinner />
          <span class="text-xs text-gray-400">Indeterminate</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <mat-spinner [diameter]="48" />
          <span class="text-xs text-gray-400">48px</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <mat-spinner [diameter]="32" />
          <span class="text-xs text-gray-400">32px</span>
        </div>
      </div>

      <div class="flex gap-6 flex-wrap items-center">
        <div class="flex flex-col items-center gap-1">
          <mat-progress-spinner mode="determinate" [value]="40" />
          <span class="text-xs text-gray-400">40%</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <mat-progress-spinner mode="determinate" [value]="75" color="accent" />
          <span class="text-xs text-gray-400">75% accent</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <mat-progress-spinner mode="determinate" [value]="90" color="warn" />
          <span class="text-xs text-gray-400">90% warn</span>
        </div>
      </div>
    </div>
  `,
  imports: [MatProgressSpinnerModule],
})
export class ProgressSpinnerPreviewComponent {}
