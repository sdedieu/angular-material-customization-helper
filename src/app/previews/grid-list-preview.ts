import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-grid-list-preview',
  template: `
    <div class="flex flex-col gap-6 max-w-md">
      <mat-grid-list cols="4" rowHeight="100px">
        @for (tile of tiles; track tile.text) {
          <mat-grid-tile
            [colspan]="tile.cols"
            [rowspan]="tile.rows"
            [style.background]="tile.color"
          >
            {{ tile.text }}
          </mat-grid-tile>
        }
      </mat-grid-list>

      <mat-grid-list cols="3" rowHeight="2:1">
        @for (i of [1, 2, 3, 4, 5, 6]; track i) {
          <mat-grid-tile [style.background]="'hsl(' + i * 50 + ', 60%, 40%)'">
            Tile {{ i }}
          </mat-grid-tile>
        }
      </mat-grid-list>
    </div>
  `,
  imports: [MatGridListModule],
})
export class GridListPreviewComponent {
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: '#4e6af0' },
    { text: 'Two', cols: 1, rows: 2, color: '#7b4af0' },
    { text: 'Three', cols: 1, rows: 1, color: '#f04e7b' },
    { text: 'Four', cols: 2, rows: 1, color: '#f0a04e' },
  ];
}
