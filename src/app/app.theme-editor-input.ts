import { Component, computed, input, output } from '@angular/core';
import { Token, Slider, DropDown, ColorPicker } from './+state/token.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-editor-input',
  template: `
    <div
      class="mb-2 p-2 rounded-md bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
    >
      <label
        for="control-{{ token().name }}"
        class="block text-xs font-medium text-slate-300 mb-1.5 truncate"
        [title]="token().name"
      >
        {{ token().name }}
      </label>
      <div class="flex items-center gap-2">
        @switch (tool().type) {
          @case ('slider') {
            <div class="flex-1 flex items-center gap-2">
              <input
                type="range"
                class="flex-1 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 outline-none appearance-none cursor-pointer [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:-mt-[5px] [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-gradient-to-r [&::-moz-range-track]:from-indigo-500 [&::-moz-range-track]:to-cyan-400 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-indigo-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-200 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:hover:scale-110"
                id="control-{{ token().name }}"
                [ngModel]="sliderConfig().value"
                (ngModelChange)="tokenValueChange.emit({ token: token(), value: $event })"
                [min]="sliderConfig().min"
                [max]="sliderConfig().max"
                [step]="sliderConfig().step"
              />
              <div class="flex items-center gap-1 min-w-[72px]">
                <input
                  type="number"
                  class="w-16 px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-200 text-sm font-mono outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all hover:border-slate-600 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  [ngModel]="sliderConfig().value"
                  (ngModelChange)="tokenValueChange.emit({ token: token(), value: $event })"
                  [min]="sliderConfig().min"
                  [max]="sliderConfig().max"
                  [step]="sliderConfig().step"
                />
                <span class="text-sm font-mono text-slate-400">{{ sliderConfig().unit }}</span>
              </div>
            </div>
          }
          @case ('dropdown') {
            <select
              class="flex-1 px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-200 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all cursor-pointer hover:border-slate-600"
              id="control-{{ token().name }}"
              [ngModel]="dropdownConfig().value"
              (ngModelChange)="tokenValueChange.emit({ token: token(), value: $event })"
            >
              @for (option of dropdownConfig().options; track $index) {
                <option [value]="option">{{ option }}</option>
              }
            </select>
          }
          @case ('color-picker') {
            <div class="flex items-center gap-2 flex-1">
              <input
                type="color"
                class="w-8 h-8 appearance-none border-2 border-slate-700 rounded cursor-pointer bg-transparent transition-all hover:border-indigo-500 hover:scale-105 [&::-webkit-color-swatch-wrapper]:p-0.5 [&::-webkit-color-swatch-wrapper]:rounded [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-sm [&::-moz-color-swatch]:border-none [&::-moz-color-swatch]:rounded-sm"
                id="control-{{ token().name }}"
                [ngModel]="colorPickerConfig().value"
                (ngModelChange)="tokenValueChange.emit({ token: token(), value: $event })"
              />
              <span class="text-[10px] font-mono text-slate-400 truncate">{{
                colorPickerConfig().value
              }}</span>
            </div>
          }
        }
      </div>
    </div>
  `,
  host: {
    class: 'block',
  },
  imports: [FormsModule],
})
export class ThemeEditorInputComponent {
  token = input.required<Token>();
  tokenValueChange = output<{ token: Token; value: string }>();

  tool = computed(() => this.token().tool);

  sliderConfig = computed(() => {
    const tool = this.tool();
    return tool.type === 'slider' ? tool.config : ({} as Slider);
  });

  dropdownConfig = computed(() => {
    const tool = this.tool();
    return tool.type === 'dropdown' ? tool.config : ({} as DropDown);
  });

  colorPickerConfig = computed(() => {
    const tool = this.tool();
    return tool.type === 'color-picker' ? tool.config : ({} as ColorPicker);
  });
}
