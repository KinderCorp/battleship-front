import type { rootReducer } from '@core/store';
import type { setupStore } from '@core/store';

export type Breakpoints = 'default' | 'desktop' | 'large-desktop' | 'phablet' | 'tablet';

// Store
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

// Generic
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;
