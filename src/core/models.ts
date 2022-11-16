import type { rootReducer } from '@core/store';
import type { setupStore } from '@core/store';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
