import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component47 from './lib1childlib2component47';

describe('Lib1childlib2component47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component47 />);
    expect(baseElement).toBeTruthy();
  });
});
