import type { Config } from 'jest';

const jestConfig: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^@home/(.*)$': '<rootDir>/src/home/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'node',
  testMatch: ['**/_tests_/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  verbose: true,
};

export default jestConfig;
