import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component8 from './lib2childlib0component8';

describe('Lib2childlib0component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component8 />);
    expect(baseElement).toBeTruthy();
  });
});
