import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component26 from './lib3childlib2component26';

describe('Lib3childlib2component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component26 />);
    expect(baseElement).toBeTruthy();
  });
});
