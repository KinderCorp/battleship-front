import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '@home/reducer';
import { getHelloWorld } from '@home/actions';
import { selectHomeValue } from '@home/selectors';
import socket from '@core/socket';

/**
 * Home page component.
 *
 * @return {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  const value = useSelector(selectHomeValue);
  const dispatch = useDispatch();

  const player1 = {
    id: 'f59e5415-2719-4816-8f29-4f6bf4622f74',
    pseudo: 'Mauï'
  };

  const player2 = {
    id: 'c122f0d5-b92c-4523-a615-3f73c71eec88',
    pseudo: 'Kéké'
  };

  const game = {
    id: 'eb4eae0e-6e6a-43bf-be3f-6c82aca2990d',
      players: [
        {
          id: 'f59e5415-2719-4816-8f29-4f6bf4622f74',
          pseudo: 'Mauï'
        }
      ]
  };

  /**
   * Create a new game.
   */
  const createGame = (): void => {
    socket.emit('CreateGame', player1);
  }


  /**
   * Join a game.
   */
  const joinGame = (): void => {
    socket.emit('JoinGame', {
      gameId: game.id,
      player: player2
    });
  }

  /**
   * Simulate a shot.
   */
  const shoot = (): void => {
    socket.emit('Shoot', game);
  }

  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <p data-testid="container-value">{value}</p>
      <button onClick={getHelloWorld}>Lancer la requête</button>
      <button onClick={createGame}>Créer une partie</button>
      <button onClick={joinGame}>Rejoindre une partie</button>
      <button onClick={shoot}>Simuler un tir</button>
    </>
  );
};

export default HomePage;
