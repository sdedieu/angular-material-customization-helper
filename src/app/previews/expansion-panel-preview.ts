import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expansion-panel-preview',
  template: `
    <mat-accordion class="block max-w-md">
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Personal data</mat-panel-title>
          <mat-panel-description>Type your name and age</mat-panel-description>
        </mat-expansion-panel-header>
        <p>I'm visible because I am open!</p>
      </mat-expansion-panel>

      <mat-expansion-panel [expanded]="true">
        <mat-expansion-panel-header>
          <mat-panel-title>Destination</mat-panel-title>
          <mat-panel-description>Where do you want to travel?</mat-panel-description>
        </mat-expansion-panel-header>
        <p>This panel is open by default.</p>
      </mat-expansion-panel>

      <mat-expansion-panel disabled>
        <mat-expansion-panel-header>
          <mat-panel-title>Disabled panel</mat-panel-title>
        </mat-expansion-panel-header>
        <p>This content is hidden because the panel is disabled.</p>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  imports: [MatExpansionModule, MatIconModule],
})
export class ExpansionPanelPreviewComponent {}
