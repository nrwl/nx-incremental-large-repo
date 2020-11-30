import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component9 from './lib2childlib8component9';

describe('Lib2childlib8component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component9 />);
    expect(baseElement).toBeTruthy();
  });
});
