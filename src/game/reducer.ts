import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GAME_NAME, GAME_SETTINGS } from '@game/constants';
import type { GamePlayer, GameRoom, GameSettings, GameState } from '@game/models';

const initialState: GameState = {
  gameRoom: {},
  settings: GAME_SETTINGS,
};

export const gameSlice = createSlice({
  initialState,
  name: GAME_NAME,
  reducers: {
    addGamePlayer: (state, action: PayloadAction<GamePlayer>) => {
      if (state.gameRoom.players) {
        state.gameRoom.players.push(action.payload);
      } else {
        state.gameRoom.players = [action.payload];
      }
    },
    initGameRoom: (state) => {
      state.gameRoom = {};
    },
    setInstanceId: (state, action: PayloadAction<GameRoom['instanceId']>) => {
      state.gameRoom.instanceId = action.payload;
    },

    updateSettings: (state, action: PayloadAction<GameSettings>) => {
      state.settings = action.payload;
    },
  },
});

export const { addGamePlayer, initGameRoom, setInstanceId, updateSettings } = gameSlice.actions;

export default gameSlice.reducer;
