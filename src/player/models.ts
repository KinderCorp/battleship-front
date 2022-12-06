export interface GuestPlayer {
  pseudo: string;
}

export interface PlayerState {
  player: GuestPlayer;
  socketId: string;
}
