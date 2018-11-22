module.exports = {
  preset: 'react-native',
  modulePaths: ['src'],
  setupFiles: ['<rootDir>/src/core/unit-test/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-flash-message)/)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/src/core/unit-test/fileMock.js',
    'styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.native.cjs.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/ios/'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
}
