import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component20 from './lib0childlib2component20';

describe('Lib0childlib2component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component20 />);
    expect(baseElement).toBeTruthy();
  });
});
