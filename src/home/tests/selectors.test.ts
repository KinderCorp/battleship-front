import * as homeConstants from '@home/constants';
import * as homeSelectors from '@home/selectors';
import homeState from '@mocks/state/homeStateMock';

const { NAME } = homeConstants;

describe('home/selectors', () => {
  const state = {
    [NAME]: { ...homeState },
  };

  it('should return value', () => {
    const selected = homeSelectors.selectHomeValue(state);
    const expectedResult = state[NAME].value;

    expect(selected).toEqual(expectedResult);
  });
});
