import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component36 from './lib3childlib2component36';

describe('Lib3childlib2component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component36 />);
    expect(baseElement).toBeTruthy();
  });
});
