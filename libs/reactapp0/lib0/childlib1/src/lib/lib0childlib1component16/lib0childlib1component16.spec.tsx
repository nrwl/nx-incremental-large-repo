import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component16 from './lib0childlib1component16';

describe('Lib0childlib1component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component16 />);
    expect(baseElement).toBeTruthy();
  });
});
