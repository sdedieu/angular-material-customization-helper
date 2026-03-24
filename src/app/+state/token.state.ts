import { computed, effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Token } from './token.model';
import { tokens } from './token.data';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

const DEFAULT_SELECTED_COMPONENT_NAME = Object.keys(tokens).at(0)!;

export const initialState: TokenStateModel = {
  activeComponent: DEFAULT_SELECTED_COMPONENT_NAME,
  tokens,
};

interface TokenStateModel {
  activeComponent: string | null;
  tokens: { [key: string]: Token[] };
}

@Injectable({
  providedIn: 'root',
})
export class TokenState {
  private state: WritableSignal<TokenStateModel> = signal<TokenStateModel>(initialState);

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  components = computed(() => Object.keys(this.state().tokens));
  activeComponent = computed(() => this.state().activeComponent);
  activeTokens = computed(() => this.state().tokens[this.state().activeComponent!] || []);

  componentNameInUrl = toSignal(
    this.route.queryParamMap.pipe(
      map((params) => {
        return params.get('component') ?? DEFAULT_SELECTED_COMPONENT_NAME;
      }),
    ),
    { initialValue: DEFAULT_SELECTED_COMPONENT_NAME },
  );

  activeComponentRouteEffetc = effect(() => {
    this.state.update((state) => ({
      ...state,
      activeComponent: this.componentNameInUrl(),
    }));
  });

  setActiveComponent(componentName: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { component: componentName },
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  setTokenValue(token: Token, value: string) {
    this.state.update((state) => {
      const updatedTokens = { ...state.tokens };
      updatedTokens[state.activeComponent!] = updatedTokens[state.activeComponent!].map((t) =>
        t.name === token.name
          ? ({ ...t, tool: { ...t.tool, config: { ...t.tool.config, value } } } as Token)
          : t,
      );

      // Update CSS variable
      const unit = token.tool.type === 'slider' ? token.tool.config.unit : '';
      document.documentElement.style.setProperty(`--custom-${token.name}`, `${value}${unit}`);

      return {
        ...state,
        tokens: updatedTokens,
      };
    });
  }
}
