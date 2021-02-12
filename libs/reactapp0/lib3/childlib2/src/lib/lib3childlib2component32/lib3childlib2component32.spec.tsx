import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component32 from './lib3childlib2component32';

describe('Lib3childlib2component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component32 />);
    expect(baseElement).toBeTruthy();
  });
});
