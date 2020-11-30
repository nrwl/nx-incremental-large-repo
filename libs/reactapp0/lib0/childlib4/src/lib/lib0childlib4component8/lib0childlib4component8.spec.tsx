import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component8 from './lib0childlib4component8';

describe('Lib0childlib4component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component8 />);
    expect(baseElement).toBeTruthy();
  });
});
