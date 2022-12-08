import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { BasePlayer, PlayerState } from '@player/models';
import { PLAYER_NAME } from '@player/constants';

// FIXME: generate random pseudo but with no difference between client/server
const initialState: PlayerState = { player: { pseudo: 'Player_name' } };

export const playerSlice = createSlice({
  initialState,
  name: PLAYER_NAME,
  reducers: {
    setPseudo: (state, action: PayloadAction<BasePlayer['pseudo']>) => {
      state.player.pseudo = action.payload;
    },
  },
});

export const { setPseudo } = playerSlice.actions;

export default playerSlice.reducer;
