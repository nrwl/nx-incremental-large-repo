import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component25 from './lib2childlib8component25';

describe('Lib2childlib8component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component25 />);
    expect(baseElement).toBeTruthy();
  });
});
