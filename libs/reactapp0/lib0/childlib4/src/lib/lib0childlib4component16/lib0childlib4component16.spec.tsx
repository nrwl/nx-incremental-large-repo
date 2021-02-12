import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component16 from './lib0childlib4component16';

describe('Lib0childlib4component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component16 />);
    expect(baseElement).toBeTruthy();
  });
});
