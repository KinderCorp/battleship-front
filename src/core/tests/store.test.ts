import { GAME_NAME } from '@game/constants';
import { gameSlice } from '@game/reducer';
import { HOME_NAME } from '@home/constants';
import { homeSlice } from '@home/reducer';
import { PLAYER_NAME } from '@player/constants';
import { playerSlice } from '@player/reducer';
import { setupStore } from '@core/store';

describe('core/store', () => {
  xit('should return global initial state', () => {
    const state = setupStore().getState();

    expect(state).toEqual({
      [GAME_NAME]: { ...gameSlice.getInitialState() },
      [HOME_NAME]: { ...homeSlice.getInitialState() },
      [PLAYER_NAME]: { ...playerSlice.getInitialState() },
    });
  });
});
