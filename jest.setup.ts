import '@testing-library/jest-dom';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    API_URL: 'api-url',
  },
}));
