import { createSlice } from '@reduxjs/toolkit';

import { generatePseudo } from '@player/helpers';
import { PLAYER_NAME } from '@player/constants';
import type { PlayerState } from '@player/models';
import socket from '@socket/index';

const initialState: PlayerState = { player: { pseudo: generatePseudo() }, socketId: socket.id };

export const playerSlice = createSlice({
  initialState,
  name: PLAYER_NAME,
  reducers: {},
});

export default playerSlice.reducer;
