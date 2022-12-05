export const SOCKET_EVENTS_EMITTING = {
  CREATE_GAME: 'create_game',
  GAME_SETTINGS: 'game_settings',
  PLAYER_JOINING_GAME: 'player_joining_game',
  PLAYER_READY_TO_PLACE_BOATS: 'player_ready_to_place_boats',
  PLAYER_VALIDATE_BOATS_PLACEMENT: 'player_validate_boats_placement',
  SHOOT: 'shoot',
  START_GAME: 'start_game',
};

export const SOCKET_EVENTS_LISTENING = {
  ALL_PLAYERS_HAVE_PLACED_THEIR_BOATS: 'all_players_have_placed_their_boats',
  END_GAME: 'end_game',
  GAME_CREATED: 'game_created',
  GAME_IS_FULL: 'game_is_full',
  GAME_NOT_FOUND: 'game_not_found',
  GAME_SETTINGS_ERROR: 'game_settings_error',
  GAME_STARTED: 'game_started',
  ONE_PLAYER_HAS_PLACED_HIS_BOATS: 'one_player_has_placed_his_boats',
  PLAYER_JOINED: 'player_joined',
  SHOOTED: 'shooted',
  START_PLACING_BOATS: 'start_placing_boats',
  UNABLE_TO_CREATE_GAME: 'unable_to_create_game',
};
