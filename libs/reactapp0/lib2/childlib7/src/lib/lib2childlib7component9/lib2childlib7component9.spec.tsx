import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component9 from './lib2childlib7component9';

describe('Lib2childlib7component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component9 />);
    expect(baseElement).toBeTruthy();
  });
});
