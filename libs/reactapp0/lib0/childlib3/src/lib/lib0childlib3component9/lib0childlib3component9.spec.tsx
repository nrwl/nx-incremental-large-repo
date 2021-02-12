import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component9 from './lib0childlib3component9';

describe('Lib0childlib3component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component9 />);
    expect(baseElement).toBeTruthy();
  });
});
