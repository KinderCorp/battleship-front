import '@testing-library/jest-dom';
/**
 * Fake match media.
 *
 * @return {object}
 */
const fakeMatchMedia = () => ({
  addListener: jest.fn(),
  matches: false,
  removeListener: jest.fn(),
});

window.matchMedia = window.matchMedia || fakeMatchMedia;

window.open = jest.fn();

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    API_HOST: 'api-host',
  },
}));
