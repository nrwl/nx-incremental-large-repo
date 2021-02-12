import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib6component0 from './lib0childlib6component0';

describe('Lib0childlib6component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib6component0 />);
    expect(baseElement).toBeTruthy();
  });
});
