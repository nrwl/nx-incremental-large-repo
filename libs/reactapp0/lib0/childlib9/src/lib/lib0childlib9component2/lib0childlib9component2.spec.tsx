import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib9component2 from './lib0childlib9component2';

describe('Lib0childlib9component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib9component2 />);
    expect(baseElement).toBeTruthy();
  });
});
