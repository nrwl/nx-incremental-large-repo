import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component8 from './lib1childlib2component8';

describe('Lib1childlib2component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component8 />);
    expect(baseElement).toBeTruthy();
  });
});
