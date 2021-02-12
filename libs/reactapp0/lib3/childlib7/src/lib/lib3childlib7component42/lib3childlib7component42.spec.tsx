import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component42 from './lib3childlib7component42';

describe('Lib3childlib7component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component42 />);
    expect(baseElement).toBeTruthy();
  });
});
