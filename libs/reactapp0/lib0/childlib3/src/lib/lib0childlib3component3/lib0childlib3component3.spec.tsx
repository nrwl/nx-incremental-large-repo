import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component3 from './lib0childlib3component3';

describe('Lib0childlib3component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component3 />);
    expect(baseElement).toBeTruthy();
  });
});
