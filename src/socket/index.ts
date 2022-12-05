import getConfig from 'next/config';
import io from 'socket.io-client';

import { listeningGameCreated } from '@socket/listeningEvents';
import { SOCKET_EVENTS_LISTENING } from '@socket/constants';

const { publicRuntimeConfig } = getConfig();

const { SOCKETS_URL } = publicRuntimeConfig;

const socket = io(SOCKETS_URL, {
  transports: ['websocket'],
});

socket.on(SOCKET_EVENTS_LISTENING.GAME_CREATED, listeningGameCreated);

export default socket;
