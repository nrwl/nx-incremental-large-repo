import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component32 from './lib2childlib7component32';

describe('Lib2childlib7component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component32 />);
    expect(baseElement).toBeTruthy();
  });
});
