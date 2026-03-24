import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-slide-toggle [(ngModel)]="checked">Basic toggle</mat-slide-toggle>
      <mat-slide-toggle [(ngModel)]="checked" color="primary">Primary</mat-slide-toggle>
      <mat-slide-toggle [(ngModel)]="checked" color="accent">Accent</mat-slide-toggle>
      <mat-slide-toggle [(ngModel)]="checked" color="warn">Warn</mat-slide-toggle>
      <mat-slide-toggle disabled>Disabled off</mat-slide-toggle>
      <mat-slide-toggle disabled [checked]="true">Disabled on</mat-slide-toggle>
    </div>
  `,
  imports: [MatSlideToggleModule, FormsModule],
})
export class SlideTogglePreviewComponent {
  checked = true;
}
