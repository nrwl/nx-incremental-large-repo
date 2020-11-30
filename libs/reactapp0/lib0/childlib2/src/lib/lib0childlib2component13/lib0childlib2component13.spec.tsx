import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component13 from './lib0childlib2component13';

describe('Lib0childlib2component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component13 />);
    expect(baseElement).toBeTruthy();
  });
});
