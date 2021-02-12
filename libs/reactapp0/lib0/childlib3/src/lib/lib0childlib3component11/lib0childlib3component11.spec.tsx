import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component11 from './lib0childlib3component11';

describe('Lib0childlib3component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component11 />);
    expect(baseElement).toBeTruthy();
  });
});
