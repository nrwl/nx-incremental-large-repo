import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component16 from './lib2childlib8component16';

describe('Lib2childlib8component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component16 />);
    expect(baseElement).toBeTruthy();
  });
});
