import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component2 from './lib1childlib2component2';

describe('Lib1childlib2component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component2 />);
    expect(baseElement).toBeTruthy();
  });
});
