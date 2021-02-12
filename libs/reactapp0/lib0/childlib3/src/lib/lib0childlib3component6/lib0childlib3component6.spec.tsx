import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component6 from './lib0childlib3component6';

describe('Lib0childlib3component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component6 />);
    expect(baseElement).toBeTruthy();
  });
});
