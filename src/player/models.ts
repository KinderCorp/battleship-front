export interface BasePlayer {
  pseudo: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GuestPlayer extends BasePlayer {}

export interface LoggedPlayer extends BasePlayer {
  id: string;
}

export interface PlayerState {
  player: Partial<GuestPlayer | LoggedPlayer>;
}
