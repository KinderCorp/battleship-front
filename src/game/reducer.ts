import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GAME_NAME, GAME_SETTINGS } from '@game/constants';
import type { GameSettings, GameState, GameView } from '@game/models';

const initialState: GameState = { settings: GAME_SETTINGS, view: 'settings' };

export const gameSlice = createSlice({
  initialState,
  name: GAME_NAME,
  reducers: {
    initGame: (state) => {
      state.view = 'settings';
    },
    setView: (state, action: PayloadAction<GameView>) => {
      state.view = action.payload;
    },
    updateSettings: (state, action: PayloadAction<GameSettings>) => {
      state.settings = action.payload;
    },
  },
});

export const { initGame, setView, updateSettings } = gameSlice.actions;

export default gameSlice.reducer;
