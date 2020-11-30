import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component17 from './lib2childlib5component17';

describe('Lib2childlib5component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component17 />);
    expect(baseElement).toBeTruthy();
  });
});
