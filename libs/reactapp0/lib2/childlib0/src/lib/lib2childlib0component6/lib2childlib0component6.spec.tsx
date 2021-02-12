import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component6 from './lib2childlib0component6';

describe('Lib2childlib0component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component6 />);
    expect(baseElement).toBeTruthy();
  });
});
