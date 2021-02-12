import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib5component11 from './lib0childlib5component11';

describe('Lib0childlib5component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib5component11 />);
    expect(baseElement).toBeTruthy();
  });
});
