import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component25 from './lib2childlib0component25';

describe('Lib2childlib0component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component25 />);
    expect(baseElement).toBeTruthy();
  });
});
