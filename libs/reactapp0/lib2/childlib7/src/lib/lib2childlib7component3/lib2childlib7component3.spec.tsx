import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component3 from './lib2childlib7component3';

describe('Lib2childlib7component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component3 />);
    expect(baseElement).toBeTruthy();
  });
});
