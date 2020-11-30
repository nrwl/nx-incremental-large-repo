import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component38 from './lib3childlib2component38';

describe('Lib3childlib2component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component38 />);
    expect(baseElement).toBeTruthy();
  });
});
