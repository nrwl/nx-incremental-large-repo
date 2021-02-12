import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component8 from './lib2childlib7component8';

describe('Lib2childlib7component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component8 />);
    expect(baseElement).toBeTruthy();
  });
});
