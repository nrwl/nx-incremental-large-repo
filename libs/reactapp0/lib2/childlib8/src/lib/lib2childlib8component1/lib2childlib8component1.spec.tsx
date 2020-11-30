import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component1 from './lib2childlib8component1';

describe('Lib2childlib8component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component1 />);
    expect(baseElement).toBeTruthy();
  });
});
