import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar-preview',
  template: `
    <div class="flex flex-col gap-6 max-w-sm">
      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-400">Determinate (65%)</span>
        <mat-progress-bar mode="determinate" [value]="65" />
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-400">Indeterminate</span>
        <mat-progress-bar mode="indeterminate" />
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-400">Buffer</span>
        <mat-progress-bar mode="buffer" [value]="40" [bufferValue]="60" />
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-400">Query</span>
        <mat-progress-bar mode="query" />
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-400">Accent color</span>
        <mat-progress-bar mode="determinate" [value]="80" color="accent" />
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-400">Warn color</span>
        <mat-progress-bar mode="determinate" [value]="30" color="warn" />
      </div>
    </div>
  `,
  imports: [MatProgressBarModule],
})
export class ProgressBarPreviewComponent {}
