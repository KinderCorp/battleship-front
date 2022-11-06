import * as homeConstants from '@home/constants';
import * as homeSelectors from '@home/selectors';
import homeStateMock from '@mocks/state/homeStateMock';

const { NAME } = homeConstants;

describe('home/selectors', () => {
  it('should return value', () => {
    const selected = homeSelectors.selectHomeValue(homeStateMock);
    const expectedResult = homeStateMock[NAME].value;

    expect(selected).toEqual(expectedResult);
  });
});
