module.exports = {
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/libs/app0/lib3/lib3',

  displayName: 'app0-lib3-lib3',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
