import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib8component42 from './lib0childlib8component42';

describe('Lib0childlib8component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib8component42 />);
    expect(baseElement).toBeTruthy();
  });
});
