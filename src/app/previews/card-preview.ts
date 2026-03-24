import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-preview',
  template: `
    <div class="flex flex-col gap-4 max-w-sm">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Some interesting content here. Cards can contain text, images, and actions.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
      <mat-card appearance="outlined">
        <mat-card-header>
          <mat-card-title>Outlined Card</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>This card uses the outlined appearance.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  imports: [MatCardModule, MatButtonModule],
})
export class CardPreviewComponent {}
