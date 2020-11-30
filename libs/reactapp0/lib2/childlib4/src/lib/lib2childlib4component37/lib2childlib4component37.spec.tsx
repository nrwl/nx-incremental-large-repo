import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component37 from './lib2childlib4component37';

describe('Lib2childlib4component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component37 />);
    expect(baseElement).toBeTruthy();
  });
});
