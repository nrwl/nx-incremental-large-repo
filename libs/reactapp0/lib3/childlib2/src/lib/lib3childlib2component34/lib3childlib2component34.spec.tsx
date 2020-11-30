import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component34 from './lib3childlib2component34';

describe('Lib3childlib2component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component34 />);
    expect(baseElement).toBeTruthy();
  });
});
