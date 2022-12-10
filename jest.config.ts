import type { Config } from 'jest';

const jestConfig: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/!(models).(ts|tsx)', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@boat/(.*)$': '<rootDir>/src/boat/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@game/(.*)$': '<rootDir>/src/game/$1',
    '^@helpers/(.*)$': '<rootDir>/src/shared/_helpers/$1',
    '^@home/(.*)$': '<rootDir>/src/home/$1',
    '^@hooks/(.*)$': '<rootDir>/src/shared/_hooks/$1',
    '^@mocks/(.*)$': '<rootDir>/mocks/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@player/(.*)$': '<rootDir>/src/player/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@socket/(.*)$': '<rootDir>/src/socket/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@translation/(.*)$': '<rootDir>/src/translation/$1',
    '^@weapon/(.*)$': '<rootDir>/src/weapon/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  verbose: true,
};

export default jestConfig;
