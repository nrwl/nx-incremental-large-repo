import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component12 from './lib0childlib2component12';

describe('Lib0childlib2component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component12 />);
    expect(baseElement).toBeTruthy();
  });
});
