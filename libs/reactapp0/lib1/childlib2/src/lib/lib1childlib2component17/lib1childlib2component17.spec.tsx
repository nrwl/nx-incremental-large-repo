import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component17 from './lib1childlib2component17';

describe('Lib1childlib2component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component17 />);
    expect(baseElement).toBeTruthy();
  });
});
