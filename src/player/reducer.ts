import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { BasePlayer, PlayerState } from '@player/models';
import { generateGuestPseudo } from '@player/helpers';
import { PLAYER_NAME } from '@player/constants';

const initialState: PlayerState = {
  player: { pseudo: generateGuestPseudo() },
};

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
