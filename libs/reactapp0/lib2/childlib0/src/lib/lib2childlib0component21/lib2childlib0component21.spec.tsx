import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component21 from './lib2childlib0component21';

describe('Lib2childlib0component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component21 />);
    expect(baseElement).toBeTruthy();
  });
});
