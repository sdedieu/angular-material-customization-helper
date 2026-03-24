import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tooltip-preview',
  template: `
    <div class="flex gap-4 flex-wrap">
      <button mat-raised-button matTooltip="Default tooltip">Hover me</button>
      <button mat-raised-button matTooltip="Above tooltip" matTooltipPosition="above">Above</button>
      <button mat-raised-button matTooltip="Below tooltip" matTooltipPosition="below">Below</button>
      <button mat-raised-button matTooltip="Left tooltip" matTooltipPosition="left">Left</button>
      <button mat-raised-button matTooltip="Right tooltip" matTooltipPosition="right">Right</button>
      <button mat-icon-button matTooltip="Icon button tooltip" aria-label="Info">
        <mat-icon>info</mat-icon>
      </button>
    </div>
  `,
  imports: [MatTooltipModule, MatButtonModule, MatIconModule],
})
export class TooltipPreviewComponent {}
