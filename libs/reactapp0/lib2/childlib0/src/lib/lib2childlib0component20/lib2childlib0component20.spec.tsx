import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component20 from './lib2childlib0component20';

describe('Lib2childlib0component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component20 />);
    expect(baseElement).toBeTruthy();
  });
});
