import * as apiHelpers from '@api/helpers';
import homeReducer, * as homeReducerAction from '@home/reducer';
import apiGetHelloWorldResponseMock from '@mocks/api/apiGetHelloWorldResponse.mock';
import { HOME_NAME } from '@home/constants';
import type { HomeState } from '@home/models';
import homeStateMock from '@mocks/store/homeState.mock';

describe('home/reducer', () => {
  it('should return the initial state', () => {
    const initialState = homeReducer(undefined, { type: undefined });
    expect(initialState).toEqual({
      helloWorld: '',
      value: 0,
    });
  });

  it('should increment the value', () => {
    const state = homeReducer(undefined, homeReducerAction.increment);
    expect(state.value).toBe(1);
  });

  it('should decrement the value', () => {
    const previousState: HomeState = { ...homeStateMock[HOME_NAME], value: 4 };
    const state = homeReducer(previousState, homeReducerAction.decrement);
    expect(state.value).toBe(3);
  });

  it('should increment by amount the value', () => {
    const state = homeReducer(undefined, homeReducerAction.incrementByAmount(10));
    expect(state.value).toBe(10);
  });

  it('should get hello world request', () => {
    const state = homeReducer(undefined, homeReducerAction.getHelloWorldRequest);
    expect(state.helloWorld).toBe('');
  });

  it('should get hello world response', () => {
    const state = homeReducer(
      undefined,
      homeReducerAction.getHelloWorldResponse(
        apiHelpers.parseResponse(apiGetHelloWorldResponseMock),
      ),
    );
    expect(state.helloWorld).toBe('Hello world!');
  });

  it('should get hello world failure', () => {
    const state = homeReducer(undefined, homeReducerAction.getHelloWorldFailure);
    expect(state.helloWorld).toBe('');
  });
});
