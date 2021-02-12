import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component7 from './lib0childlib0component7';

describe('Lib0childlib0component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component7 />);
    expect(baseElement).toBeTruthy();
  });
});
