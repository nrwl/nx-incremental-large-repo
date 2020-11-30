import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component16 from './lib1childlib7component16';

describe('Lib1childlib7component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component16 />);
    expect(baseElement).toBeTruthy();
  });
});
