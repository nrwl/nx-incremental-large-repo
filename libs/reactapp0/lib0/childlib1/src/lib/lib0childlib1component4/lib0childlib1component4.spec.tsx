import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component4 from './lib0childlib1component4';

describe('Lib0childlib1component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component4 />);
    expect(baseElement).toBeTruthy();
  });
});
