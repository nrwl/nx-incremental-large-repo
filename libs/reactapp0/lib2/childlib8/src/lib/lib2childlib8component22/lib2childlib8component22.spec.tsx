import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component22 from './lib2childlib8component22';

describe('Lib2childlib8component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component22 />);
    expect(baseElement).toBeTruthy();
  });
});
