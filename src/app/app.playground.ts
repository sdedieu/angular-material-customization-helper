import { Component, inject } from '@angular/core';
import { ThemeEditorComponent } from './app.theme-editor';
import { ThemePreviewComponent } from './app.theme-preview';
import { CodeViewerComponent } from './app.code-viewer';
import { TokenState } from './+state/token.state';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <nav class="bg-slate-800 py-4 px-8 flex sticky top-0 z-2">
      <select
        class="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-200 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all cursor-pointer hover:border-slate-600"
        [ngModel]="activeComponent()"
        (ngModelChange)="setActiveComponent($event)"
      >
        @for (component of components(); track $index) {
          <option [value]="component">{{ component }}</option>
        }
      </select>
    </nav>
    <div class="flex min-h-dvh max-h-dvh">
      <aside class="basis-[400px] px-2 py-3 border-r border-gray-600 bg-slate-950 overflow-y-auto">
        <app-theme-editor />
      </aside>
      <main class="flex-1 bg-slate-950 px-4 py-5 overflow-y-auto">
        <app-theme-preview />
        <app-code-viewer />
      </main>
    </div>
  `,
  imports: [ThemeEditorComponent, ThemePreviewComponent, CodeViewerComponent, FormsModule],
})
export class Playground {
  private readonly state = inject(TokenState);

  activeComponent = this.state.activeComponent;
  setActiveComponent = this.state.setActiveComponent.bind(this.state);
  components = this.state.components;
}
