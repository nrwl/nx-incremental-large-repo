import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component6 from './lib0childlib1component6';

describe('Lib0childlib1component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component6 />);
    expect(baseElement).toBeTruthy();
  });
});
