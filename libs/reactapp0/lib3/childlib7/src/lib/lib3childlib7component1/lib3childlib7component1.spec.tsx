import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component1 from './lib3childlib7component1';

describe('Lib3childlib7component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component1 />);
    expect(baseElement).toBeTruthy();
  });
});
