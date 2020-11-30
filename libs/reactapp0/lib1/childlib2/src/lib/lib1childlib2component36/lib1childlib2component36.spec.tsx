import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component36 from './lib1childlib2component36';

describe('Lib1childlib2component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component36 />);
    expect(baseElement).toBeTruthy();
  });
});
