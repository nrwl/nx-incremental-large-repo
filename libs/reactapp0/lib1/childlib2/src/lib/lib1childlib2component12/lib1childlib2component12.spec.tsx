import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component12 from './lib1childlib2component12';

describe('Lib1childlib2component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component12 />);
    expect(baseElement).toBeTruthy();
  });
});
