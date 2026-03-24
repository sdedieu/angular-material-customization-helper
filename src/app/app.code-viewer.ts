import { Component, computed, inject, signal } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { TokenState } from './+state/token.state';

@Component({
  selector: 'app-code-viewer',
  template: `
    <div class="mt-8 border border-gray-700 rounded-lg overflow-hidden">
      <button
        (click)="toggleExpanded()"
        class="w-full px-4 py-3 bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-between text-slate-200"
      >
        <span class="font-medium">SCSS Code</span>
        <svg
          class="w-5 h-5 transition-transform duration-200"
          [class.rotate-180]="isExpanded()"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      @if (isExpanded()) {
        <div class="p-4 bg-slate-950">
          <markdown [data]="markdown()" clipboard> </markdown>
        </div>
      }
    </div>
  `,
  imports: [MarkdownComponent],
})
export class CodeViewerComponent {
  private tokenState = inject(TokenState);
  isExpanded = signal(false);

  toggleExpanded() {
    this.isExpanded.update((v) => !v);
  }

  content = computed(() => {
    const activeComponent = this.tokenState.activeComponent();
    const tokens = this.tokenState.activeTokens();

    if (!activeComponent || tokens.length === 0) {
      return `@use '@angular/material' as mat;

// Customize the entire app. Change :root to your selector if you want to scope the styles.
:root {
  @include mat.${activeComponent || 'component'}-overrides((
    // No tokens available
  ));
}`;
    }

    // Generate token overrides with actual values
    const tokenOverrides = tokens
      .map((token) => {
        const value = token.tool.config.value;
        let formattedValue: string;

        if (token.tool.type === 'color-picker') {
          formattedValue = `${value}`;
        } else if (token.tool.type === 'dropdown') {
          formattedValue = `${value}`;
        } else if (token.tool.type === 'slider') {
          const unit = token.tool.config.unit || '';
          formattedValue = `${value}${unit}`;
        } else {
          formattedValue = `${value}`;
        }

        return `    ${token.name}: ${formattedValue},`;
      })
      .join('\n');

    return `@use '@angular/material' as mat;

// Customize the entire app. Change :root to your selector if you want to scope the styles.
:root {
  @include mat.${activeComponent}-overrides((
${tokenOverrides}
  ));
}`;
  });

  markdown = computed(() => '```scss\n' + this.content() + '\n```');
}
