import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component4 from './lib0childlib2component4';

describe('Lib0childlib2component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component4 />);
    expect(baseElement).toBeTruthy();
  });
});
