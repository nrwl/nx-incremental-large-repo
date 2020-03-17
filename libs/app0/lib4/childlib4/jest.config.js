module.exports = {
  name: 'app0-lib4-childlib4',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/app0/lib4/childlib4',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
