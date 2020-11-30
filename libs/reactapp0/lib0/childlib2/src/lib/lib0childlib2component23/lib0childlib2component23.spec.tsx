import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component23 from './lib0childlib2component23';

describe('Lib0childlib2component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component23 />);
    expect(baseElement).toBeTruthy();
  });
});
