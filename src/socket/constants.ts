export const SOCKET_EVENTS_EMITTING = {
  CLOSE_ROOM: 'close-room',
  CREATE_GAME: 'create-game',
  GAME_SETTINGS: 'game-settings',
  PLAYER_JOINING_GAME: 'player-joining-game',
  PLAYERS_READY_TO_PLACE_BOATS: 'players-ready-to-place-boats',
  SHOOT: 'shoot',
  START_GAME: 'start-game',
  VALIDATE_PLAYER_BOATS_PLACEMENT: 'validate-player-boats-placement',
};

export const SOCKET_EVENTS_LISTENING = {
  ALL_PLAYERS_HAVE_PLACED_THEIR_BOATS: 'all-players-have-placed-their-boats',
  CLOSED_ROOM: 'closed-room',
  END_GAME: 'end-game',
  ERROR_CELL_ALREADY_HIT: 'error-cell-already-hit',
  ERROR_GAME_IS_FULL: 'error-game-is-full',
  ERROR_GAME_NOT_FOUND: 'error-game-not-found',
  ERROR_GAME_NOT_STARTED: 'error-game-not-started',
  ERROR_INVALID_BOARD_GAME_DIMENSIONS: 'error-invalid-board-game-dimensions',
  ERROR_INVALID_BOAT: 'error-invalid-boat',
  ERROR_INVALID_NUMBER_OF_PLAYERS: 'error-invalid-number-of-players',
  ERROR_MISSING_PLAYER: 'error-missing-player',
  ERROR_NO_ACTION_REMAINING: 'error-no-action-remaining',
  ERROR_NO_AMMUNITION_REMAINING: 'error-no-ammunition-remaining',
  ERROR_OUT_OF_BOUNDS: 'error-out-of-bounds',
  ERROR_PLAYER_NOT_FOUND: 'error-player-not-found',
  ERROR_UNABLE_TO_CREATE_GAME: 'error-unable-to-create-game',
  ERROR_UNKNOWN_SERVER: 'error-unknown-server',
  ERROR_WEAPON_NOT_FOUND: 'error-weapon-not-found',
  GAME_ALREADY_CREATED: 'game-already-created',
  GAME_CREATED: 'game-created',
  GAME_INFORMATION: 'game-information',
  GAME_STARTED: 'game-started',
  ONE_PLAYER_HAS_PLACED_HIS_BOATS: 'one-player-has-placed-his-boats',
  PLAYER_DISCONNECTED: 'player-disconnected',
  PLAYER_JOINED: 'player-joined',
  SHOT: 'shot',
  START_PLACING_BOATS: 'start-placing-boats',
};
