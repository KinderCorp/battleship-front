const jestConfig = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  rootDir: "./",
  testMatch: ['**/*.spec.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default jestConfig;
