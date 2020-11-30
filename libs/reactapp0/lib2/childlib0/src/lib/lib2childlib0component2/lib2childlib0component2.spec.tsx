import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component2 from './lib2childlib0component2';

describe('Lib2childlib0component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component2 />);
    expect(baseElement).toBeTruthy();
  });
});
