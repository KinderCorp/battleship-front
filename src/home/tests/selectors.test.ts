import * as homeSelectors from '@home/selectors';
import { HOME_NAME } from '@home/constants';
import homeStateMock from '@mocks/state/homeState.mock';
import { setupStore } from '@core/store';

const state = setupStore().getState();

describe('home/selectors', () => {
  it('should return value', () => {
    const selected = homeSelectors.selectHomeValue({ ...state, ...homeStateMock });
    const expectedResult = homeStateMock[HOME_NAME].value;

    expect(selected).toEqual(expectedResult);
  });

  it('should return hello world', () => {
    const selected = homeSelectors.selectHomeHelloWorld({ ...state, ...homeStateMock });
    const expectedResult = homeStateMock[HOME_NAME].helloWorld;

    expect(selected).toEqual(expectedResult);
  });
});
