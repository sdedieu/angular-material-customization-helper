import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-preview',
  template: `
    <div class="flex flex-col gap-4">
      <mat-tab-group>
        <mat-tab label="First">Content of the First Tab</mat-tab>
        <mat-tab label="Second">Content of the Second Tab</mat-tab>
        <mat-tab label="Third">Content of the Third Tab</mat-tab>
        <mat-tab label="Disabled" disabled>Disabled content</mat-tab>
      </mat-tab-group>

      <mat-tab-group color="accent">
        <mat-tab label="Accent Tab 1">Accent styled tabs</mat-tab>
        <mat-tab label="Accent Tab 2">Second tab content</mat-tab>
      </mat-tab-group>
    </div>
  `,
  imports: [MatTabsModule],
})
export class TabsPreviewComponent {}
