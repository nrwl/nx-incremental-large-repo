import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component21 from './lib2childlib7component21';

describe('Lib2childlib7component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component21 />);
    expect(baseElement).toBeTruthy();
  });
});
