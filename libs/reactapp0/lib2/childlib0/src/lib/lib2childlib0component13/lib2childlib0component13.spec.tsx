import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component13 from './lib2childlib0component13';

describe('Lib2childlib0component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component13 />);
    expect(baseElement).toBeTruthy();
  });
});
