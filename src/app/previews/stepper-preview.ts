import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-preview',
  template: `
    <mat-stepper [linear]="false" class="max-w-md" #stepper>
      <mat-step [stepControl]="firstFormGroup" label="Fill out your name">
        <form [formGroup]="firstFormGroup">
          <mat-form-field class="w-full">
            <mat-label>Name</mat-label>
            <input matInput formControlName="firstCtrl" placeholder="Ex. John" />
          </mat-form-field>
          <div class="mt-2">
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
        <form [formGroup]="secondFormGroup">
          <mat-form-field class="w-full">
            <mat-label>Address</mat-label>
            <input matInput formControlName="secondCtrl" placeholder="Ex. 123 Main St" />
          </mat-form-field>
          <div class="mt-2">
            <button mat-button matStepperPrevious>Back</button>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step label="Done">
        <p>You are now done.</p>
        <div class="mt-2">
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class StepperPreviewComponent {
  private fb = inject(FormBuilder);
  firstFormGroup = this.fb.group({ firstCtrl: ['', Validators.required] });
  secondFormGroup = this.fb.group({ secondCtrl: ['', Validators.required] });
}
