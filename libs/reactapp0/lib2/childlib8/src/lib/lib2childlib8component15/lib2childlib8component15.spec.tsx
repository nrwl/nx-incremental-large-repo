import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component15 from './lib2childlib8component15';

describe('Lib2childlib8component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component15 />);
    expect(baseElement).toBeTruthy();
  });
});
