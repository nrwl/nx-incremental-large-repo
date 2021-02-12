import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component20 from './lib0childlib1component20';

describe('Lib0childlib1component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component20 />);
    expect(baseElement).toBeTruthy();
  });
});
