import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component48 from './lib3childlib2component48';

describe('Lib3childlib2component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component48 />);
    expect(baseElement).toBeTruthy();
  });
});
