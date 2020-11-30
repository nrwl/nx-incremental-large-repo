import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component42 from './lib2childlib7component42';

describe('Lib2childlib7component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component42 />);
    expect(baseElement).toBeTruthy();
  });
});
