import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib5component12 from './lib0childlib5component12';

describe('Lib0childlib5component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib5component12 />);
    expect(baseElement).toBeTruthy();
  });
});
