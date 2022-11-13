import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import * as apiHelpers from '@api/helpers';
import * as homeConstants from '@home/constants';
import * as homeHelpers from '@home/helpers';
import type { ApiGetHelloWorldResponse, ApiResponse } from '@api/models';
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
      action: PayloadAction<ApiResponse<ApiGetHelloWorldResponse>>,
    ) => {
      if (action.payload) {
        // BUG: ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
        // const { data } = apiHelpers.parseApiResponse(action.payload);
        // const parsedHelloWorld = homeHelpers.parseHelloWorld(data);
        // state.helloWorld = parsedHelloWorld.message;
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
