import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component9 from './lib2childlib4component9';

describe('Lib2childlib4component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component9 />);
    expect(baseElement).toBeTruthy();
  });
});
