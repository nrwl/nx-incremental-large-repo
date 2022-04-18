module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/app0',

  displayName: 'app0',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transform: { '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular' },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
};
