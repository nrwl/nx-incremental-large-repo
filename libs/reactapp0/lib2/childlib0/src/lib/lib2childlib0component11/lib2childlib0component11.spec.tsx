import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component11 from './lib2childlib0component11';

describe('Lib2childlib0component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component11 />);
    expect(baseElement).toBeTruthy();
  });
});
