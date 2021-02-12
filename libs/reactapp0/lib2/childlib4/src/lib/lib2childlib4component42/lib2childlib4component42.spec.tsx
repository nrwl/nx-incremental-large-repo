import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component42 from './lib2childlib4component42';

describe('Lib2childlib4component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component42 />);
    expect(baseElement).toBeTruthy();
  });
});
