import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component4 from './lib2childlib8component4';

describe('Lib2childlib8component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component4 />);
    expect(baseElement).toBeTruthy();
  });
});
