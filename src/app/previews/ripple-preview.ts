import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-ripple-preview',
  template: `
    <div class="flex flex-col gap-4">
      <div
        matRipple
        class="w-48 h-16 flex items-center justify-center rounded border border-gray-500 cursor-pointer select-none"
      >
        Click me (Ripple)
      </div>
      <div
        matRipple
        [matRippleCentered]="true"
        class="w-48 h-16 flex items-center justify-center rounded border border-gray-500 cursor-pointer select-none"
      >
        Centered Ripple
      </div>
      <div
        matRipple
        [matRippleDisabled]="true"
        class="w-48 h-16 flex items-center justify-center rounded border border-gray-500 cursor-pointer select-none opacity-50"
      >
        Disabled Ripple
      </div>
    </div>
  `,
  imports: [MatRippleModule],
})
export class RipplePreviewComponent {}
