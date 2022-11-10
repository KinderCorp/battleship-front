import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Action } from 'redux';
import axios from 'axios';

import type { AppDispatch } from '@core/models';

// Override axios inteceptors to pervent it from throwing errors
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

axios.defaults.headers.common['Content-Type'] = 'application/json';

/**
 * Call requestDispatchWithAxios with dispatcher.
 *
 * @param {AxiosRequestConfig} axiosParams Params for axios
 * @param {Action} actionRequest Action called when the request starts
 * @param {Action} actionResponse Action called if the request is succeeds
 * @param {Action} actionFailed Action called if the request fails
 * @return {Promise<void>}
 */
export const requestWithAxios =
  (
    axiosParams: AxiosRequestConfig,
    actionRequest: Action,
    actionResponse: Action,
    actionFailed: Action,
  ) =>
  (dispatch: AppDispatch) =>
    requestDispatchWithAxios(axiosParams, actionRequest, actionResponse, actionFailed, dispatch);

/**
 * Helpers that make requests with Axios and dispatch some events to the store.
 *
 * @param {AxiosRequestConfig} axiosParams Params for axios
 * @param {Action} actionRequest Action called when the request starts
 * @param {Action} actionResponse Action called if the request is succeeds
 * @param {Action} actionFailed Action called if the request fails
 * @param {AppDispatch} dispatch Dispatch the action
 * @return {Promise<void>}
 */
export const requestDispatchWithAxios = (
  axiosParams: AxiosRequestConfig,
  actionRequest: Action,
  actionResponse: Action,
  actionFailed: Action,
  dispatch: AppDispatch,
): Promise<void> => {
  dispatch(actionRequest);

  return axios(axiosParams)
    .then(({ data }: AxiosResponse) => {
      dispatch({
        payload: data,
        type: actionResponse.type,
      });
    })
    .catch((error) => {
      dispatch({
        payload: error,
        type: actionFailed.type,
      });
    });
};

/**
 * Get axios headers with authorization.
 *
 * @param {string} token User token
 * @return {Record<string, Record<string, string>>}
 */
export const getAuthorizationHeaders = (token: string): Record<string, Record<string, string>> => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
