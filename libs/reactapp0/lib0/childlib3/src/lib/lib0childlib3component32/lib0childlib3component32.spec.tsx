import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component32 from './lib0childlib3component32';

describe('Lib0childlib3component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component32 />);
    expect(baseElement).toBeTruthy();
  });
});
