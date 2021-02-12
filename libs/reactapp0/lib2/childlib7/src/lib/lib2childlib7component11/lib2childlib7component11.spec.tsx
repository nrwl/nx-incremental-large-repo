import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component11 from './lib2childlib7component11';

describe('Lib2childlib7component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component11 />);
    expect(baseElement).toBeTruthy();
  });
});
