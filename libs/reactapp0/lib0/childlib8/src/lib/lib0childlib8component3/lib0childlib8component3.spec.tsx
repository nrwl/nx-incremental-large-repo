import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib8component3 from './lib0childlib8component3';

describe('Lib0childlib8component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib8component3 />);
    expect(baseElement).toBeTruthy();
  });
});
