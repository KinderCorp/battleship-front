export const SOCKET_EVENTS_EMITTING = {
  CREATE_GAME: 'create-game',
  GAME_SETTINGS: 'game-settings',
  PLAYER_JOINING_GAME: 'player-joining-game',
  PLAYER_READY_TO_PLACE_BOATS: 'player-ready-to-place-boats',
  SHOOT: 'shoot',
  START_GAME: 'start-game',
  VALIDATE_PLAYER_BOATS_PLACEMENT: 'validate-player-boats-placement',
};

export const SOCKET_EVENTS_LISTENING = {
  ALL_PLAYERS_HAVE_PLACED_THEIR_BOATS: 'all-players-have-placed-their-boats',
  END_GAME: 'end-game',
  GAME_CREATED: 'game-created',
  GAME_IS_FULL: 'game-is-full',
  GAME_NOT_FOUND: 'game-not-found',
  GAME_SETTINGS_ERROR: 'game-settings-error',
  GAME_STARTED: 'game-started',
  MISPLACED_BOATS: 'misplaced-boats',
  ONE_PLAYER_HAS_PLACED_HIS_BOATS: 'one-player-has-placed-his-boats',
  PLAYER_JOINED: 'player-joined',
  SHOT: 'shot',
  START_PLACING_BOATS: 'start-placing-boats',
  UNABLE_TO_CREATE_GAME: 'unable-to-create-game',
};
