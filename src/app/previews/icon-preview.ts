import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon-preview',
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex gap-3 flex-wrap">
        <mat-icon>home</mat-icon>
        <mat-icon>favorite</mat-icon>
        <mat-icon>settings</mat-icon>
        <mat-icon>search</mat-icon>
        <mat-icon>notifications</mat-icon>
        <mat-icon>mail</mat-icon>
      </div>
      <div class="flex gap-3 flex-wrap items-center">
        <mat-icon color="primary">home</mat-icon>
        <mat-icon color="accent">favorite</mat-icon>
        <mat-icon color="warn">warning</mat-icon>
      </div>
      <div class="flex gap-3 flex-wrap items-center">
        <mat-icon style="font-size: 18px">home</mat-icon>
        <mat-icon style="font-size: 24px">home</mat-icon>
        <mat-icon style="font-size: 36px">home</mat-icon>
        <mat-icon style="font-size: 48px">home</mat-icon>
      </div>
    </div>
  `,
  imports: [MatIconModule],
})
export class IconPreviewComponent {}
