import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component5 from './lib2childlib9component5';

describe('Lib2childlib9component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component5 />);
    expect(baseElement).toBeTruthy();
  });
});
