import getConfig from 'next/config';
import io from 'socket.io-client';

import {
  listeningErrorGameIsFull,
  // listeningErrorGameNotFound,
  listeningGameCreated,
  listeningGameInformation,
  listeningPlayerDisconnected,
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
// socket.on(SOCKET_EVENTS_LISTENING.ERROR_GAME_NOT_FOUND, listeningErrorGameNotFound);
socket.on(SOCKET_EVENTS_LISTENING.GAME_INFORMATION, listeningGameInformation);
socket.on(SOCKET_EVENTS_LISTENING.PLAYER_DISCONNECTED, listeningPlayerDisconnected);
socket.on(SOCKET_EVENTS_LISTENING.ERROR_GAME_IS_FULL, listeningErrorGameIsFull);

export default socket;
