import { createSlice } from '@reduxjs/toolkit';

import { PLAYER_NAME } from '@player/constants';
import type { PlayerState } from '@player/models';

const initialState: PlayerState = { player: { pseudo: '' } };

export const playerSlice = createSlice({
  initialState,
  name: PLAYER_NAME,
  reducers: {},
});

// export const {} = playerSlice.actions;

export default playerSlice.reducer;
