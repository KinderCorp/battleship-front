import homeReducer, { decrement, increment, incrementByAmount } from '@home/reducer';
import type { HomeState } from '@home/models';

describe('home/reducer', () => {
  it('should return the initial state', () => {
    const initialState = homeReducer(undefined, { type: undefined });
    expect(initialState).toEqual({
      value: 0,
    });
  });

  it('should increment the value', () => {
    const state = homeReducer(undefined, increment);
    expect(state.value).toBe(1);
  });

  it('should decrement the value', () => {
    const previousState: HomeState = { value: 4 };
    const state = homeReducer(previousState, decrement);
    expect(state.value).toBe(3);
  });

  it('should increment by amount the value', () => {
    const state = homeReducer(undefined, incrementByAmount(10));
    expect(state.value).toBe(10);
  });
});
