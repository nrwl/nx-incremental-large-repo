import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component18 from './lib3childlib7component18';

describe('Lib3childlib7component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component18 />);
    expect(baseElement).toBeTruthy();
  });
});
