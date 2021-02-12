import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component2 from './lib0childlib4component2';

describe('Lib0childlib4component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component2 />);
    expect(baseElement).toBeTruthy();
  });
});
