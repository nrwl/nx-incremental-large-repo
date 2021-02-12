import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component32 from './lib3childlib7component32';

describe('Lib3childlib7component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component32 />);
    expect(baseElement).toBeTruthy();
  });
});
