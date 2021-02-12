import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component26 from './lib2childlib4component26';

describe('Lib2childlib4component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component26 />);
    expect(baseElement).toBeTruthy();
  });
});
