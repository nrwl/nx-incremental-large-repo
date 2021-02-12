import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component21 from './lib0childlib1component21';

describe('Lib0childlib1component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component21 />);
    expect(baseElement).toBeTruthy();
  });
});
