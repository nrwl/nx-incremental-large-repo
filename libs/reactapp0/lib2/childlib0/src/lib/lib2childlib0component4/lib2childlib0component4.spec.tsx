import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component4 from './lib2childlib0component4';

describe('Lib2childlib0component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component4 />);
    expect(baseElement).toBeTruthy();
  });
});
