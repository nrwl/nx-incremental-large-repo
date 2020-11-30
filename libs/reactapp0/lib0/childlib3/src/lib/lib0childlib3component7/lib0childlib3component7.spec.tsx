import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component7 from './lib0childlib3component7';

describe('Lib0childlib3component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component7 />);
    expect(baseElement).toBeTruthy();
  });
});
