import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component15 from './lib3childlib7component15';

describe('Lib3childlib7component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component15 />);
    expect(baseElement).toBeTruthy();
  });
});
