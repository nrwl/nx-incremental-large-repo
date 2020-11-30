import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib7component7 from './lib0childlib7component7';

describe('Lib0childlib7component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib7component7 />);
    expect(baseElement).toBeTruthy();
  });
});
