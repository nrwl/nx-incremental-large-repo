import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component15 from './lib2childlib4component15';

describe('Lib2childlib4component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component15 />);
    expect(baseElement).toBeTruthy();
  });
});
