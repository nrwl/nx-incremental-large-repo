import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component16 from './lib2childlib7component16';

describe('Lib2childlib7component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component16 />);
    expect(baseElement).toBeTruthy();
  });
});
