import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component31 from './lib1childlib2component31';

describe('Lib1childlib2component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component31 />);
    expect(baseElement).toBeTruthy();
  });
});
