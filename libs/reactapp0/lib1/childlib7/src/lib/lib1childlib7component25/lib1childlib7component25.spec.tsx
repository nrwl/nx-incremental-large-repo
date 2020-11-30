import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component25 from './lib1childlib7component25';

describe('Lib1childlib7component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component25 />);
    expect(baseElement).toBeTruthy();
  });
});
