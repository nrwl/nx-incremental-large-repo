import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component17 from './lib3childlib7component17';

describe('Lib3childlib7component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component17 />);
    expect(baseElement).toBeTruthy();
  });
});
