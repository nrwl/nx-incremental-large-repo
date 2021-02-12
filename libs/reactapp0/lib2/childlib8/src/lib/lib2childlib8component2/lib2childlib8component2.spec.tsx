import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component2 from './lib2childlib8component2';

describe('Lib2childlib8component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component2 />);
    expect(baseElement).toBeTruthy();
  });
});
