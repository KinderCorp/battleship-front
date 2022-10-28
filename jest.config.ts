export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
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
