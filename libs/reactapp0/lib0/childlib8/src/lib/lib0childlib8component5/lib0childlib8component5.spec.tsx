import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib8component5 from './lib0childlib8component5';

describe('Lib0childlib8component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib8component5 />);
    expect(baseElement).toBeTruthy();
  });
});
