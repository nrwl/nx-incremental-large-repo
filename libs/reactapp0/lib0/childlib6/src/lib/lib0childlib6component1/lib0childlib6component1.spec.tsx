import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib6component1 from './lib0childlib6component1';

describe('Lib0childlib6component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib6component1 />);
    expect(baseElement).toBeTruthy();
  });
});
