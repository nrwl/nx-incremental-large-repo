import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component45 from './lib3childlib7component45';

describe('Lib3childlib7component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component45 />);
    expect(baseElement).toBeTruthy();
  });
});
