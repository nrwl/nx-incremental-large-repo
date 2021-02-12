import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component2 from './lib0childlib2component2';

describe('Lib0childlib2component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component2 />);
    expect(baseElement).toBeTruthy();
  });
});
