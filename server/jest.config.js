module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/__tests__/results/unit/coverage',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [ '<rootDir>/__tests__/**/*.spec.ts', '<rootDir>/__tests__/**/*.spec.js' ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ]
};