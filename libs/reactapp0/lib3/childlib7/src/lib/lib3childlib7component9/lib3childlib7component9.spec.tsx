import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component9 from './lib3childlib7component9';

describe('Lib3childlib7component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component9 />);
    expect(baseElement).toBeTruthy();
  });
});
