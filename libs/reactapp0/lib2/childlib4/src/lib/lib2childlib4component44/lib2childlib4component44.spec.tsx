import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component44 from './lib2childlib4component44';

describe('Lib2childlib4component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component44 />);
    expect(baseElement).toBeTruthy();
  });
});
