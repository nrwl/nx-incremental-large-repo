import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component20 from './lib2childlib7component20';

describe('Lib2childlib7component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component20 />);
    expect(baseElement).toBeTruthy();
  });
});
