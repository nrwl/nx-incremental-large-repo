import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component18 from './lib2childlib9component18';

describe('Lib2childlib9component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component18 />);
    expect(baseElement).toBeTruthy();
  });
});
