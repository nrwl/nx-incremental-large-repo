import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component13 from './lib3childlib2component13';

describe('Lib3childlib2component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component13 />);
    expect(baseElement).toBeTruthy();
  });
});
