/* eslint-disable no-console */
import getConfig from 'next/config';
import io from 'socket.io-client';

const { publicRuntimeConfig } = getConfig();

const { SOCKETS_URL } = publicRuntimeConfig;

const socket = io(SOCKETS_URL, {
  transports: ['websocket'],
});

// socket.on('connected', () => {
//   console.log(`Socket connected with id ${socket.id}`);
// });

// socket.on('UserReceived', (data: any) => {
//   console.log(data);
// });

export default socket;
