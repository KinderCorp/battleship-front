import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '@home/reducer';
import { getHelloWorld } from '@home/actions';
import { selectHomeValue } from '@home/selectors';

/**
 * Home page component.
 *
 * @return {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  const value = useSelector(selectHomeValue);
  const dispatch = useDispatch();

  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <p data-testid="container-value">{value}</p>
      <button onClick={() => getHelloWorld()}>Lancer la requête</button>
    </>
  );
};

export default HomePage;
