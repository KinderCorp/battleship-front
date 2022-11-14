import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

import type { Action, ApiResponse, ApiResponseParsed } from '@api/models';
import store from '@core/store';

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
 * Helpers that make requests with Axios and dispatch some events to the store.
 *
 * @param {AxiosRequestConfig} axiosConfig Params for axios
 * @param {Action} actionRequest Action called when the request starts
 * @param {Action} actionResponse Action called if the request is succeeds
 * @param {Action} actionFailed Action called if the request fails
 * @return {Promise<void>}
 */
export const requestWithAxios = async (
  axiosConfig: AxiosRequestConfig,
  actionRequest: Action,
  actionResponse: Action,
  actionFailed: Action,
): Promise<void> => {
  store.dispatch({ ...actionRequest });

  try {
    const { data } = await axios(axiosConfig);

    store.dispatch({
      ...actionResponse,
      payload: data,
    });
  } catch (error: any) {
    store.dispatch({
      ...actionFailed,
      error: true,
      payload: error,
    });
  }
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

/**
 * Parse API response.
 *
 * @param {ApiResponse} apiResponse Api response
 * @return {ApiResponseParsed}
 */
export const parseApiResponse = (apiResponse: ApiResponse): ApiResponseParsed => {
  const { data = {} } = apiResponse;
  return { data };
};
