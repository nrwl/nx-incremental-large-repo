import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component23 from './lib0childlib3component23';

describe('Lib0childlib3component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component23 />);
    expect(baseElement).toBeTruthy();
  });
});
