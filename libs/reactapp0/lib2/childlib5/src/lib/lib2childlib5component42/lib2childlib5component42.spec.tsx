import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component42 from './lib2childlib5component42';

describe('Lib2childlib5component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component42 />);
    expect(baseElement).toBeTruthy();
  });
});
