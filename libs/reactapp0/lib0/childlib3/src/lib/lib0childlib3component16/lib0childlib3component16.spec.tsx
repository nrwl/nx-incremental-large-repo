import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component16 from './lib0childlib3component16';

describe('Lib0childlib3component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component16 />);
    expect(baseElement).toBeTruthy();
  });
});
