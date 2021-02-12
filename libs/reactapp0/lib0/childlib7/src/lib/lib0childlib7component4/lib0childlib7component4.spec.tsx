import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib7component4 from './lib0childlib7component4';

describe('Lib0childlib7component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib7component4 />);
    expect(baseElement).toBeTruthy();
  });
});
