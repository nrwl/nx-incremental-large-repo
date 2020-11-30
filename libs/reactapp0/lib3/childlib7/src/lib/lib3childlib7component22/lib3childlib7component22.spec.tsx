import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component22 from './lib3childlib7component22';

describe('Lib3childlib7component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component22 />);
    expect(baseElement).toBeTruthy();
  });
});
