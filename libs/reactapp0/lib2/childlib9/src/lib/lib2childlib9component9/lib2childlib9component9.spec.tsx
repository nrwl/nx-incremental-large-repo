import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component9 from './lib2childlib9component9';

describe('Lib2childlib9component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component9 />);
    expect(baseElement).toBeTruthy();
  });
});
