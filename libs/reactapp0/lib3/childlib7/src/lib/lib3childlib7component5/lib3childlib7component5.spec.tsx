import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component5 from './lib3childlib7component5';

describe('Lib3childlib7component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component5 />);
    expect(baseElement).toBeTruthy();
  });
});
