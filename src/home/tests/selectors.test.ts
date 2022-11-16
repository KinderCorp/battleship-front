import * as homeConstants from '@home/constants';
import * as homeSelectors from '@home/selectors';
import homeStateMock from '@mocks/state/homeState.mock';

const { NAME } = homeConstants;

describe('home/selectors', () => {
  it('should return value', () => {
    const selected = homeSelectors.selectHomeValue(homeStateMock);
    const expectedResult = homeStateMock[NAME].value;

    expect(selected).toEqual(expectedResult);
  });

  it('should return hello world', () => {
    const selected = homeSelectors.selectHomeHelloWorld(homeStateMock);
    const expectedResult = homeStateMock[NAME].helloWorld;

    expect(selected).toEqual(expectedResult);
  });
});
