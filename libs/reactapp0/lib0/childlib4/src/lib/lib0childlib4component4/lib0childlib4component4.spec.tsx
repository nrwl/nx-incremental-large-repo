import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component4 from './lib0childlib4component4';

describe('Lib0childlib4component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component4 />);
    expect(baseElement).toBeTruthy();
  });
});
