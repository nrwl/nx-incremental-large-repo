import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component37 from './lib3childlib2component37';

describe('Lib3childlib2component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component37 />);
    expect(baseElement).toBeTruthy();
  });
});
