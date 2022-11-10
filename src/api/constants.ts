import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { API_HOST } = publicRuntimeConfig;

export const API_HELLO = `${API_HOST}/hello`;
