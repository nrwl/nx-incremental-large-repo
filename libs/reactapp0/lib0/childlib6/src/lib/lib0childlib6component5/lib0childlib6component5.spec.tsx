import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib6component5 from './lib0childlib6component5';

describe('Lib0childlib6component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib6component5 />);
    expect(baseElement).toBeTruthy();
  });
});
