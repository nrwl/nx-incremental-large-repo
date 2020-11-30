import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component17 from './lib2childlib0component17';

describe('Lib2childlib0component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component17 />);
    expect(baseElement).toBeTruthy();
  });
});
