import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib5component4 from './lib0childlib5component4';

describe('Lib0childlib5component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib5component4 />);
    expect(baseElement).toBeTruthy();
  });
});
