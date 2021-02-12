import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib6component3 from './lib0childlib6component3';

describe('Lib0childlib6component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib6component3 />);
    expect(baseElement).toBeTruthy();
  });
});
