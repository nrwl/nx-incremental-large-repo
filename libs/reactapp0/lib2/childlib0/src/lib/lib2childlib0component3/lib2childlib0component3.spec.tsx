import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component3 from './lib2childlib0component3';

describe('Lib2childlib0component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component3 />);
    expect(baseElement).toBeTruthy();
  });
});
