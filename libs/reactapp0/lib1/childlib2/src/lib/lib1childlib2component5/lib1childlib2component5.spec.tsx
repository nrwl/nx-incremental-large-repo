import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component5 from './lib1childlib2component5';

describe('Lib1childlib2component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component5 />);
    expect(baseElement).toBeTruthy();
  });
});
