import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component8 from './lib1childlib7component8';

describe('Lib1childlib7component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component8 />);
    expect(baseElement).toBeTruthy();
  });
});
