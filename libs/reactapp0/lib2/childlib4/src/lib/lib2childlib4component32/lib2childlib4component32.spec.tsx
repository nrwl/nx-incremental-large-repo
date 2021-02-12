import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component32 from './lib2childlib4component32';

describe('Lib2childlib4component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component32 />);
    expect(baseElement).toBeTruthy();
  });
});
