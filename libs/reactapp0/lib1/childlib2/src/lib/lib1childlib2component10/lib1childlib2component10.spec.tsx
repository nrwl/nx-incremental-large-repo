import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component10 from './lib1childlib2component10';

describe('Lib1childlib2component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component10 />);
    expect(baseElement).toBeTruthy();
  });
});
