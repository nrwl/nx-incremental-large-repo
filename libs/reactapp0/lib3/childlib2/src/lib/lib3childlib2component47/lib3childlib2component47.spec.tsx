import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component47 from './lib3childlib2component47';

describe('Lib3childlib2component47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component47 />);
    expect(baseElement).toBeTruthy();
  });
});
