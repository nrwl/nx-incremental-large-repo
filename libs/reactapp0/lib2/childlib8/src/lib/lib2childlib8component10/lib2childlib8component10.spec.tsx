import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component10 from './lib2childlib8component10';

describe('Lib2childlib8component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component10 />);
    expect(baseElement).toBeTruthy();
  });
});
