import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component38 from './lib1childlib2component38';

describe('Lib1childlib2component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component38 />);
    expect(baseElement).toBeTruthy();
  });
});
