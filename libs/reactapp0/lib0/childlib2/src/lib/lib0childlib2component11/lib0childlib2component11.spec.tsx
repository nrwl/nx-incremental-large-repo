import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component11 from './lib0childlib2component11';

describe('Lib0childlib2component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component11 />);
    expect(baseElement).toBeTruthy();
  });
});
