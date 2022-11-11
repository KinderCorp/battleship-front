import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { API_HOST } = publicRuntimeConfig;

export const HTTP_STATUS_CODE: Record<Uppercase<string>, number> = {
  BAD_REQUEST: 400,
  CREATED: 201,
  INTERNAL_SERVER_ERROR: 500,
  NO_CONTENT: 204,
  OK: 200,
  UNAUTHORIZED: 401,
};

// Routes
export const API_HELLO = `${API_HOST}/hello`;
