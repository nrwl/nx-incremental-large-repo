import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component5 from './lib2childlib8component5';

describe('Lib2childlib8component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component5 />);
    expect(baseElement).toBeTruthy();
  });
});
