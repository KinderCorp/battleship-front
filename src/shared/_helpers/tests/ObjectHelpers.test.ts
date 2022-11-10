import ObjectHelpers from '@helpers/ObjectHelpers';

describe('helpers/ObjectHelpers', () => {
  it('should have defined methods', () => {
    expect(ObjectHelpers.isEmpty).toBeDefined();
  });

  it('should return false when received an object', () => {
    expect(ObjectHelpers.isEmpty({ key: 'value' })).toBeFalsy();
  });

  it('should return true when received an empty object', () => {
    expect(ObjectHelpers.isEmpty({})).toBeTruthy();
  });

  it('should return true when received another type than object', () => {
    expect(ObjectHelpers.isEmpty(null)).toBeTruthy();
    expect(ObjectHelpers.isEmpty('name')).toBeTruthy();
    expect(ObjectHelpers.isEmpty(42)).toBeTruthy();
    expect(ObjectHelpers.isEmpty(false)).toBeTruthy();
    expect(ObjectHelpers.isEmpty([])).toBeTruthy();
    expect(ObjectHelpers.isEmpty(['item1', 'item2'])).toBeTruthy();
    expect(ObjectHelpers.isEmpty(undefined)).toBeTruthy();
    expect(ObjectHelpers.isEmpty(jest.fn())).toBeTruthy();
  });
});
