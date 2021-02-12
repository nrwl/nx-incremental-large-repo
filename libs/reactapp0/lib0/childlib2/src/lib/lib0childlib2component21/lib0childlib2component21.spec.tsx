import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component21 from './lib0childlib2component21';

describe('Lib0childlib2component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component21 />);
    expect(baseElement).toBeTruthy();
  });
});
