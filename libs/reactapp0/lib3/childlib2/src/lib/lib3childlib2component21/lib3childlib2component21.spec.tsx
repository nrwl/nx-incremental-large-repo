import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component21 from './lib3childlib2component21';

describe('Lib3childlib2component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component21 />);
    expect(baseElement).toBeTruthy();
  });
});
