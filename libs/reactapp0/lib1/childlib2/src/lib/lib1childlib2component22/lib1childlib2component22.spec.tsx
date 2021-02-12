import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component22 from './lib1childlib2component22';

describe('Lib1childlib2component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component22 />);
    expect(baseElement).toBeTruthy();
  });
});
