import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-sort-preview',
  template: `
    <table class="w-full text-sm">
      <thead>
        <tr matSort (matSortChange)="sortData($event)">
          <th mat-sort-header="name" class="text-left p-2">Name</th>
          <th mat-sort-header="calories" class="text-left p-2">Calories</th>
          <th mat-sort-header="fat" class="text-left p-2">Fat (g)</th>
        </tr>
      </thead>
      <tbody>
        @for (row of sortedData; track row.name) {
          <tr class="border-t border-gray-700">
            <td class="p-2">{{ row.name }}</td>
            <td class="p-2">{{ row.calories }}</td>
            <td class="p-2">{{ row.fat }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  imports: [MatSortModule],
})
export class SortPreviewComponent {
  data = [
    { name: 'Frozen yogurt', calories: 159, fat: 6 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9 },
    { name: 'Eclair', calories: 262, fat: 16 },
    { name: 'Cupcake', calories: 305, fat: 4 },
  ];
  sortedData = [...this.data];

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      this.sortedData = [...this.data];
      return;
    }
    this.sortedData = [...this.data].sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const valA = (a as any)[sort.active];
      const valB = (b as any)[sort.active];
      return (valA < valB ? -1 : 1) * (isAsc ? 1 : -1);
    });
  }
}
