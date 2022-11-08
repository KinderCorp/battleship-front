import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import * as homeConstants from '@home/constants';
import type { HomeState } from '@home/models';

const initialState: HomeState = {
  value: 0,
};

export const homeSlice = createSlice({
  initialState,
  name: homeConstants.NAME,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;
