import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component20 from './lib2childlib8component20';

describe('Lib2childlib8component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component20 />);
    expect(baseElement).toBeTruthy();
  });
});
