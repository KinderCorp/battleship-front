import type { Config } from 'jest';

const jestConfig: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@home/(.*)$': '<rootDir>/src/home/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
  },
  preset: 'ts-jest',
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'node',
  testMatch: ['**/_tests_/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  verbose: true,
};

export default jestConfig;
