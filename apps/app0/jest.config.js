module.exports = {
  name: 'app0',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app0',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
