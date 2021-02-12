import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component6 from './lib0childlib4component6';

describe('Lib0childlib4component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component6 />);
    expect(baseElement).toBeTruthy();
  });
});
