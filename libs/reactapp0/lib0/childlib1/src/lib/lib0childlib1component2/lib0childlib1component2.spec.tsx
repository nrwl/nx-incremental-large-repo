import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component2 from './lib0childlib1component2';

describe('Lib0childlib1component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component2 />);
    expect(baseElement).toBeTruthy();
  });
});
