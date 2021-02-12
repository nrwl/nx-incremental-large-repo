import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component18 from './lib2childlib8component18';

describe('Lib2childlib8component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component18 />);
    expect(baseElement).toBeTruthy();
  });
});
