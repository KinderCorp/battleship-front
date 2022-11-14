import * as homeConstants from '@home/constants';
import { homeSlice } from '@home/reducer';
import { setupStore } from '@core/store';

describe('core/store', () => {
  it('should return global initial state', () => {
    const state = setupStore().getState();
    expect(state).toEqual({ [homeConstants.NAME]: { ...homeSlice.getInitialState() } });
  });
});
