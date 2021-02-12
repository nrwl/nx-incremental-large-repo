import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib8component8 from './lib0childlib8component8';

describe('Lib0childlib8component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib8component8 />);
    expect(baseElement).toBeTruthy();
  });
});
