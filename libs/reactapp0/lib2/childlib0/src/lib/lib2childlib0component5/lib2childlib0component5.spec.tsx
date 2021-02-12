import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component5 from './lib2childlib0component5';

describe('Lib2childlib0component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component5 />);
    expect(baseElement).toBeTruthy();
  });
});
