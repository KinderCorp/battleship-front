import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GAME_NAME, GAME_SETTINGS } from '@game/constants';
import type { GamePlayer, GameRoom, GameSettings, GameState, GameView } from '@game/models';
import type { Boat } from '@boat/models';

const initialState: GameState = {
  gameRoom: {} as GameRoom,
  settings: GAME_SETTINGS,
  view: 'settings',
};

export const gameSlice = createSlice({
  initialState,
  name: GAME_NAME,
  reducers: {
    initGameRoom: (state) => {
      state.gameRoom = {} as GameRoom;
    },
    setGamePlayers: (state, action: PayloadAction<GamePlayer[]>) => {
      state.gameRoom.players = action.payload;
    },
    setGameRoom: (state, action: PayloadAction<GameRoom>) => {
      state.gameRoom = action.payload;
    },
    setGameRoomBoatsAuthorized: (state, action: PayloadAction<Boat[]>) => {
      // FIXME: bad code
      if (state.gameRoom.settings) {
        state.gameRoom.settings.boatsAuthorized = action.payload;
      } else {
        state.gameRoom.settings = {
          ...GAME_SETTINGS,
          boatsAuthorized: action.payload,
        };
      }
    },
    setInstanceId: (state, action: PayloadAction<GameRoom['instanceId']>) => {
      state.gameRoom.instanceId = action.payload;
    },
    setView: (state, action: PayloadAction<GameView>) => {
      state.view = action.payload;
    },
    updateSettings: (state, action: PayloadAction<GameSettings>) => {
      state.settings = action.payload;
    },
  },
});

export const {
  initGameRoom,
  setGamePlayers,
  setGameRoom,
  setGameRoomBoatsAuthorized,
  setInstanceId,
  setView,
  updateSettings,
} = gameSlice.actions;

export default gameSlice.reducer;
