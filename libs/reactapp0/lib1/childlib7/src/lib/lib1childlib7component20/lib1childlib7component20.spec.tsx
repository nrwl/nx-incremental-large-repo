import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component20 from './lib1childlib7component20';

describe('Lib1childlib7component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component20 />);
    expect(baseElement).toBeTruthy();
  });
});
