import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component42 from './lib1childlib2component42';

describe('Lib1childlib2component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component42 />);
    expect(baseElement).toBeTruthy();
  });
});
