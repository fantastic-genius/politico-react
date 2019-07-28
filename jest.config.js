const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["./src/setupTest/setupTest.js"],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/', '/src/tests/e2e'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|gif|ttf|otf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss', 'js', 'css'],
  resolver: 'jest-webpack-resolver',
  coveragePathIgnorePatterns: ['/src/utils/'],
}
 