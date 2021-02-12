import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component3 from './lib0childlib4component3';

describe('Lib0childlib4component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component3 />);
    expect(baseElement).toBeTruthy();
  });
});
