import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component18 from './lib2childlib4component18';

describe('Lib2childlib4component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component18 />);
    expect(baseElement).toBeTruthy();
  });
});
