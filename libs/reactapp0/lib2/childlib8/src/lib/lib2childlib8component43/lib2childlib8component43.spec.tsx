import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component43 from './lib2childlib8component43';

describe('Lib2childlib8component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component43 />);
    expect(baseElement).toBeTruthy();
  });
});
