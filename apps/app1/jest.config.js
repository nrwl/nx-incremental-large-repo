module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/app0',

  displayName: 'app1',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
