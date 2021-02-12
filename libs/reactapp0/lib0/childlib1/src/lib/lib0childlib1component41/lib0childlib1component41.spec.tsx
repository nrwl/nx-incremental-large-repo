import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component41 from './lib0childlib1component41';

describe('Lib0childlib1component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component41 />);
    expect(baseElement).toBeTruthy();
  });
});
