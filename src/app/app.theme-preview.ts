import { Component, inject, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { TokenState } from './+state/token.state';
import {
  AutocompletePreviewComponent,
  BadgePreviewComponent,
  BottomSheetPreviewComponent,
  ButtonPreviewComponent,
  ButtonTogglePreviewComponent,
  CardPreviewComponent,
  CheckboxPreviewComponent,
  ChipPreviewComponent,
  DatepickerPreviewComponent,
  DialogPreviewComponent,
  DividerPreviewComponent,
  ExpansionPanelPreviewComponent,
  FabPreviewComponent,
  FormFieldPreviewComponent,
  GridListPreviewComponent,
  IconPreviewComponent,
  IconButtonPreviewComponent,
  ListPreviewComponent,
  MenuPreviewComponent,
  OptgroupPreviewComponent,
  OptionPreviewComponent,
  PaginatorPreviewComponent,
  ProgressBarPreviewComponent,
  ProgressSpinnerPreviewComponent,
  PseudoCheckboxPreviewComponent,
  RadioPreviewComponent,
  RipplePreviewComponent,
  SelectPreviewComponent,
  SidenavPreviewComponent,
  SlideTogglePreviewComponent,
  SliderPreviewComponent,
  SnackbarPreviewComponent,
  SortPreviewComponent,
  StepperPreviewComponent,
  TablePreviewComponent,
  TabsPreviewComponent,
  TimepickerPreviewComponent,
  ToolbarPreviewComponent,
  TooltipPreviewComponent,
  TreePreviewComponent,
} from './previews';

const COMPONENT_MAP: Record<string, Type<unknown>> = {
  autocomplete: AutocompletePreviewComponent,
  badge: BadgePreviewComponent,
  'bottom-sheet': BottomSheetPreviewComponent,
  button: ButtonPreviewComponent,
  'button-toggle': ButtonTogglePreviewComponent,
  card: CardPreviewComponent,
  checkbox: CheckboxPreviewComponent,
  chip: ChipPreviewComponent,
  datepicker: DatepickerPreviewComponent,
  dialog: DialogPreviewComponent,
  divider: DividerPreviewComponent,
  'expansion-panel': ExpansionPanelPreviewComponent,
  fab: FabPreviewComponent,
  'form-field': FormFieldPreviewComponent,
  'grid-list': GridListPreviewComponent,
  icon: IconPreviewComponent,
  'icon-button': IconButtonPreviewComponent,
  list: ListPreviewComponent,
  menu: MenuPreviewComponent,
  optgroup: OptgroupPreviewComponent,
  option: OptionPreviewComponent,
  paginator: PaginatorPreviewComponent,
  'progress-bar': ProgressBarPreviewComponent,
  'progress-spinner': ProgressSpinnerPreviewComponent,
  'pseudo-checkbox': PseudoCheckboxPreviewComponent,
  radio: RadioPreviewComponent,
  ripple: RipplePreviewComponent,
  select: SelectPreviewComponent,
  sidenav: SidenavPreviewComponent,
  'slide-toggle': SlideTogglePreviewComponent,
  slider: SliderPreviewComponent,
  snackbar: SnackbarPreviewComponent,
  sort: SortPreviewComponent,
  stepper: StepperPreviewComponent,
  table: TablePreviewComponent,
  tabs: TabsPreviewComponent,
  timepicker: TimepickerPreviewComponent,
  toolbar: ToolbarPreviewComponent,
  tooltip: TooltipPreviewComponent,
  tree: TreePreviewComponent,
};

@Component({
  selector: 'app-theme-preview',
  host: {
    class: 'text-white flex flex-col gap-2',
  },
  template: `
    @if (activePreviewComponent()) {
      <ng-container *ngComponentOutlet="activePreviewComponent()" />
    } @else {
      <p class="text-gray-400 text-sm">No preview available for "{{ activeComponent() }}".</p>
    }
  `,
  imports: [NgComponentOutlet],
})
export class ThemePreviewComponent {
  private readonly state = inject(TokenState);
  activeComponent = this.state.activeComponent;

  activePreviewComponent(): Type<unknown> | null {
    const key = this.activeComponent();
    return key ? (COMPONENT_MAP[key] ?? null) : null;
  }
}
