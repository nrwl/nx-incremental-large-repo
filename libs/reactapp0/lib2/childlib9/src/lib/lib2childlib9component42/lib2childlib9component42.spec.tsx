import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component42 from './lib2childlib9component42';

describe('Lib2childlib9component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component42 />);
    expect(baseElement).toBeTruthy();
  });
});
