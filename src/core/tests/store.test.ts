import * as home from '@home/index';
import { homeSlice } from '@home/reducer';
import store from '@core/store';

describe('core/store', () => {
  it('should return global state', () => {
    const state = store.getState();
    expect(state).toEqual({ [home.NAME]: { ...homeSlice.getInitialState() } });
  });
});
