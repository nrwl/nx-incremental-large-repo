import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component42 from './lib2childlib1component42';

describe('Lib2childlib1component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component42 />);
    expect(baseElement).toBeTruthy();
  });
});
