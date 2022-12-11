import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GAME_NAME, GAME_SETTINGS } from '@game/constants';
import type { GamePlayer, GameRoom, GameSettings, GameState, GameView } from '@game/models';
import type { Boat } from '@boat/models';

const initialState: GameState = {
  gameRoom: {} as GameRoom,
  // gameRoom: {
  //   instanceId: 'VLgJT0odiUJPU0NzUOFL',
  //   players: [
  //     {
  //       id: '1SqKohl9mPf5r2TTYbUB',
  //       isAdmin: true,
  //       pseudo: 'Player_401',
  //       socketId: '-eP10Si_XxD4r2HKAAB7',
  //     },
  //     {
  //       id: 'Chl9Ihi6bHAxIJ2FnMfE',
  //       isAdmin: false,
  //       pseudo: 'Player_986',
  //       socketId: 'aU4gMQc2bvZp5M6mAAB_',
  //     },
  //   ],
  //   settings: {
  //     ...GAME_SETTINGS,
  //     boatsAuthorized: [
  //       {
  //         lengthCell: 1,
  //         name: '1x1',
  //         src: '/images/boats/boat-1x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 1,
  //         name: '1x1',
  //         src: '/images/boats/boat-1x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 1,
  //         name: '1x1',
  //         src: '/images/boats/boat-1x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 1,
  //         name: '1x1',
  //         src: '/images/boats/boat-1x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 2,
  //         name: '2x1',
  //         src: '/images/boats/boat-2x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 2,
  //         name: '2x1',
  //         src: '/images/boats/boat-2x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 2,
  //         name: '2x1',
  //         src: '/images/boats/boat-2x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 3,
  //         name: '3x1',
  //         src: '/images/boats/boat-3x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 3,
  //         name: '3x1',
  //         src: '/images/boats/boat-3x1.png',
  //         widthCell: 1,
  //       },
  //       {
  //         lengthCell: 4,
  //         name: '4x1',
  //         src: '/images/boats/boat-4x1.png',
  //         widthCell: 1,
  //       },
  //     ],
  //   },
  // } as GameRoom,
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
