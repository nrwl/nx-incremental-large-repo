import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component17 from './lib2childlib4component17';

describe('Lib2childlib4component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component17 />);
    expect(baseElement).toBeTruthy();
  });
});
