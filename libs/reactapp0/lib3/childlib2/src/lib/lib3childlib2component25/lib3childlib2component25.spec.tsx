import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component25 from './lib3childlib2component25';

describe('Lib3childlib2component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component25 />);
    expect(baseElement).toBeTruthy();
  });
});
