import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component8 from './lib0childlib1component8';

describe('Lib0childlib1component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component8 />);
    expect(baseElement).toBeTruthy();
  });
});
