import { getFieldId } from '@shared/Field/helpers';

describe('shared/helpers/Input', () => {
  it('should have defined methods', () => {
    expect(getFieldId).toBeDefined();
  });

  it('should return empty value when received empty params', () => {
    expect(getFieldId()).toBe('');
  });

  it('should return the expected value when received one param', () => {
    expect(getFieldId('email')).toBe('field-email');
  });

  it('should return the expected value when received more one params', () => {
    expect(getFieldId('gender', 'male')).toBe('field-gender-male');
  });
});
