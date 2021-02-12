import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component41 from './lib1childlib2component41';

describe('Lib1childlib2component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component41 />);
    expect(baseElement).toBeTruthy();
  });
});
