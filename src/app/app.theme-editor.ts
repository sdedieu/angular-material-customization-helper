import { Component, inject } from '@angular/core';
import { TokenState } from './+state/token.state';
import { ThemeEditorInputComponent } from './app.theme-editor-input';

@Component({
  selector: 'app-theme-editor',
  template: `
    @for (token of tokens(); track token.name) {
      <app-theme-editor-input
        [token]="token"
        (tokenValueChange)="setTokenValue($event.token, $event.value)"
      />
    }
  `,
  host: {
    class: 'flex flex-col',
  },
  imports: [ThemeEditorInputComponent],
})
export class ThemeEditorComponent {
  private readonly state = inject(TokenState);
  tokens = this.state.activeTokens;

  setTokenValue = this.state.setTokenValue.bind(this.state);
}
