import getConfig from 'next/config';
import io from 'socket.io-client';

import {
  listeningGameCreated,
  listeningPlayerJoined,
  listeningStartPlacingBoats,
} from '@socket/listeningEvents';
import { SOCKET_EVENTS_LISTENING } from '@socket/constants';

const { publicRuntimeConfig } = getConfig();

const { SOCKETS_URL } = publicRuntimeConfig;

const socket = io(SOCKETS_URL, {
  transports: ['websocket'],
});

socket.on(SOCKET_EVENTS_LISTENING.GAME_CREATED, listeningGameCreated);
socket.on(SOCKET_EVENTS_LISTENING.PLAYER_JOINED, listeningPlayerJoined);
socket.on(SOCKET_EVENTS_LISTENING.START_PLACING_BOATS, listeningStartPlacingBoats);

export default socket;
