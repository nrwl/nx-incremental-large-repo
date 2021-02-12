import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component11 from './lib2childlib8component11';

describe('Lib2childlib8component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component11 />);
    expect(baseElement).toBeTruthy();
  });
});
