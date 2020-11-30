import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component0 from './lib2childlib8component0';

describe('Lib2childlib8component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component0 />);
    expect(baseElement).toBeTruthy();
  });
});
