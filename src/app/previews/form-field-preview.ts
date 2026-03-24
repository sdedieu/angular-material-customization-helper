import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-field-preview',
  template: `
    <div class="flex flex-col gap-4 max-w-sm">
      <mat-form-field>
        <mat-label>Fill (default)</mat-label>
        <input matInput placeholder="Ex. John" />
        <mat-hint>Enter your first name</mat-hint>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Outline</mat-label>
        <input matInput placeholder="Ex. Smith" />
        <mat-icon matSuffix>person</mat-icon>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>With prefix &amp; suffix</mat-label>
        <span matTextPrefix>$&nbsp;</span>
        <input matInput type="number" placeholder="0.00" />
        <span matTextSuffix>&nbsp;USD</span>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>With error</mat-label>
        <input matInput required />
        <mat-error>This field is required</mat-error>
      </mat-form-field>

      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Disabled</mat-label>
        <input matInput disabled value="Cannot edit this" />
      </mat-form-field>
    </div>
  `,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
})
export class FormFieldPreviewComponent {}
