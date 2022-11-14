import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import * as homeConstants from '@home/constants';
import * as homeHelpers from '@home/helpers';
import type { ApiGetHelloWorldResponse, ApiResponseParsed } from '@api/models';
import type { HomeState } from '@home/models';

const initialState: HomeState = {
  helloWorld: '',
  value: 0,
};

export const homeSlice = createSlice({
  initialState,
  name: homeConstants.NAME,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    getHelloWorldFailure: (state) => state,
    getHelloWorldRequest: (state) => state,
    getHelloWorldResponse: (
      state,
      action: PayloadAction<ApiResponseParsed<ApiGetHelloWorldResponse>>,
    ) => {
      if (action.payload.data) {
        const parsedHelloWorld = homeHelpers.parseHelloWorld(action.payload.data);
        state.helloWorld = parsedHelloWorld.message;
      }
    },
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  decrement,
  getHelloWorldFailure,
  getHelloWorldRequest,
  getHelloWorldResponse,
  increment,
  incrementByAmount,
} = homeSlice.actions;

export default homeSlice.reducer;
