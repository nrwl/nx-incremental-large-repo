import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component11 from './lib3childlib7component11';

describe('Lib3childlib7component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component11 />);
    expect(baseElement).toBeTruthy();
  });
});
