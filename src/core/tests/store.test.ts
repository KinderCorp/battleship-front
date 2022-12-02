import { GAME_NAME } from '@game/constants';
import { gameSlice } from '@game/reducer';
import { HOME_NAME } from '@home/constants';
import { homeSlice } from '@home/reducer';
import { setupStore } from '@core/store';

describe('core/store', () => {
  it('should return global initial state', () => {
    const state = setupStore().getState();

    expect(state).toEqual({
      [GAME_NAME]: { ...gameSlice.getInitialState() },
      [HOME_NAME]: { ...homeSlice.getInitialState() },
    });
  });
});
