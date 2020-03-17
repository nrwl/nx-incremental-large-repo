module.exports = {
  name: 'app0-lib3-lib3',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/app0/lib3/lib3',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
