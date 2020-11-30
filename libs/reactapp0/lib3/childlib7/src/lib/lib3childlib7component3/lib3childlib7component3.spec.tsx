import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component3 from './lib3childlib7component3';

describe('Lib3childlib7component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component3 />);
    expect(baseElement).toBeTruthy();
  });
});
