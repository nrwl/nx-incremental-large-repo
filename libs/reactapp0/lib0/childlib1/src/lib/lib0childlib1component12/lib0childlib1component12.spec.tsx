import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component12 from './lib0childlib1component12';

describe('Lib0childlib1component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component12 />);
    expect(baseElement).toBeTruthy();
  });
});
