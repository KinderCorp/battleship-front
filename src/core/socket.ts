/* eslint-disable no-console */
import getConfig from 'next/config';
import io from 'socket.io-client';

const { publicRuntimeConfig } = getConfig();
const { SOCKETS_URL } = publicRuntimeConfig;

const socket = io(SOCKETS_URL, {
  transports: ["websocket"]
});


socket.on('connect', () => {
  console.log(`Socket connected with id ${socket.id}`);
})

socket.on('GameCreated', (data: any): void => {
  console.log('Nouvelle partie créée:');
  console.log(data);
})

socket.on('UserJoined', (data: any): void => {
  console.log('Un joueur a rejoint la partie:');
  console.log(data);
})

socket.on('GameNotFound', (): void => {
  console.log(`La partie que vous tentez de rejoindre n'existe pas.`);
})

socket.on('Shooted', (data: any): void => {
  console.log('Un joueur a tiré:');
  console.log(data);
})

export default socket;