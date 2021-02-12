import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component45 from './lib1childlib7component45';

describe('Lib1childlib7component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component45 />);
    expect(baseElement).toBeTruthy();
  });
});
