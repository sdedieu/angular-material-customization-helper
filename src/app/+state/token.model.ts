export type Token = {
  name: string;
  type: TokenType;
  basedOn: string;
  tool: TokenTool;
};

export enum TokenType {
  BASE,
  COLOR,
  TYPOGRAPHY,
}

export interface Slider {
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
}

export interface InputText {
  value: string;
  placeholder: string;
  pattern: string;
}

export interface DropDown {
  value: string;
  options: string[];
}

export interface ColorPicker {
  value: string;
  presets: string[];
}

export type TokenTool =
  | { type: 'slider'; config: Slider }
  | { type: 'dropdown'; config: DropDown }
  | { type: 'color-picker'; config: ColorPicker };
