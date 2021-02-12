import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component17 from './lib2childlib7component17';

describe('Lib2childlib7component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component17 />);
    expect(baseElement).toBeTruthy();
  });
});
