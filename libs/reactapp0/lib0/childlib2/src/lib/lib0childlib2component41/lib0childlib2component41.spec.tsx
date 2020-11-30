import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component41 from './lib0childlib2component41';

describe('Lib0childlib2component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component41 />);
    expect(baseElement).toBeTruthy();
  });
});
