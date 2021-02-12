import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component27 from './lib3childlib2component27';

describe('Lib3childlib2component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component27 />);
    expect(baseElement).toBeTruthy();
  });
});
