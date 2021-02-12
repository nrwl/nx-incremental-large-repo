import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component22 from './lib0childlib1component22';

describe('Lib0childlib1component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component22 />);
    expect(baseElement).toBeTruthy();
  });
});
