import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component2 from './lib1childlib7component2';

describe('Lib1childlib7component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component2 />);
    expect(baseElement).toBeTruthy();
  });
});
