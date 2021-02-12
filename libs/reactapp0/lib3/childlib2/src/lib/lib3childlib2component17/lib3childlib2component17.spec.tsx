import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component17 from './lib3childlib2component17';

describe('Lib3childlib2component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component17 />);
    expect(baseElement).toBeTruthy();
  });
});
