import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component27 from './lib2childlib4component27';

describe('Lib2childlib4component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component27 />);
    expect(baseElement).toBeTruthy();
  });
});
