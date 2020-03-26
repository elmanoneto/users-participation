module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "modulePaths": [
    "<rootDir>"
  ],
  testMatch: ['<rootDir>/__tests__/**/*.spec.(ts|js)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules']
};