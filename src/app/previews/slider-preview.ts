import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider-preview',
  template: `
    <div class="flex flex-col gap-6 w-64">
      <mat-slider min="1" max="100" step="1">
        <input matSliderThumb [(ngModel)]="value" />
      </mat-slider>
      <mat-slider min="0" max="100" step="10" discrete showTickMarks>
        <input matSliderThumb [(ngModel)]="valueDiscrete" />
      </mat-slider>
      <mat-slider min="0" max="100">
        <input matSliderStartThumb [(ngModel)]="rangeStart" />
        <input matSliderEndThumb [(ngModel)]="rangeEnd" />
      </mat-slider>
      <mat-slider disabled min="0" max="100">
        <input matSliderThumb value="40" />
      </mat-slider>
    </div>
  `,
  imports: [MatSliderModule, FormsModule],
})
export class SliderPreviewComponent {
  value = 50;
  valueDiscrete = 30;
  rangeStart = 20;
  rangeEnd = 70;
}
