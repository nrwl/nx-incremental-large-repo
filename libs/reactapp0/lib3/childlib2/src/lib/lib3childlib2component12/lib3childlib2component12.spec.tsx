import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component12 from './lib3childlib2component12';

describe('Lib3childlib2component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component12 />);
    expect(baseElement).toBeTruthy();
  });
});
