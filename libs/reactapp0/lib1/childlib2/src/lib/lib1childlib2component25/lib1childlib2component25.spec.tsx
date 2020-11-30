import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component25 from './lib1childlib2component25';

describe('Lib1childlib2component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component25 />);
    expect(baseElement).toBeTruthy();
  });
});
