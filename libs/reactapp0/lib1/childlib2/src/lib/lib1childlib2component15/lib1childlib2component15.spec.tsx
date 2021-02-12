import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component15 from './lib1childlib2component15';

describe('Lib1childlib2component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component15 />);
    expect(baseElement).toBeTruthy();
  });
});
