import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { API_URL } = publicRuntimeConfig;

export const HTTP_STATUS_CODE: Record<string, number> = {
  BAD_REQUEST: 400,
  CREATED: 201,
  INTERNAL_SERVER_ERROR: 500,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  OK: 200,
  UNAUTHORIZED: 401,
};

// Routes
export const API_HELLO = `${API_URL}/hello`;
