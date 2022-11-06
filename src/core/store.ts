import { configureStore } from '@reduxjs/toolkit';

import * as home from '@home/index';

const store = configureStore({
  reducer: {
    [home.NAME]: home.reducer,
  },
});

export default store;
