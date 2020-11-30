import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component37 from './lib1childlib2component37';

describe('Lib1childlib2component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component37 />);
    expect(baseElement).toBeTruthy();
  });
});
