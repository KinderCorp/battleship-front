import * as homeConstants from '@home/constants';
import * as homeSelectors from '@home/selectors';
import homeState from '@mocks/state/homeStateMock';

const { NAME } = homeConstants;

describe('home/selectors', () => {
  it('should return value', () => {
    const selected = homeSelectors.selectHomeValue(homeState);
    const expectedResult = homeState[NAME].value;

    expect(selected).toEqual(expectedResult);
  });
});
