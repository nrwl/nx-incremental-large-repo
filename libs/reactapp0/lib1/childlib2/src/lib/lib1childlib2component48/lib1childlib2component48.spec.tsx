import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component48 from './lib1childlib2component48';

describe('Lib1childlib2component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component48 />);
    expect(baseElement).toBeTruthy();
  });
});
