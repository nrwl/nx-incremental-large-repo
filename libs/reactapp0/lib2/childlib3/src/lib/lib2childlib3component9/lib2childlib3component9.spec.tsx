import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component9 from './lib2childlib3component9';

describe('Lib2childlib3component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component9 />);
    expect(baseElement).toBeTruthy();
  });
});
