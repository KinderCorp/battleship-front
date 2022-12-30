export interface BasePlayer {
  pseudo: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GuestPlayer extends BasePlayer {}

export interface LoggedPlayer extends BasePlayer {
  id: string;
}

export type Player = GuestPlayer | LoggedPlayer;

// Reducer
export interface PlayerState {
  player: Player;
}

// PlayersCards
export type PlayersCardsSize = 'medium' | 'small';
export interface PlayersCardsProps {
  size?: PlayersCardsSize;
}
