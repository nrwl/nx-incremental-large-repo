import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component21 from './lib0childlib4component21';

describe('Lib0childlib4component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component21 />);
    expect(baseElement).toBeTruthy();
  });
});
