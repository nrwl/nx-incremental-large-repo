import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component43 from './lib2childlib7component43';

describe('Lib2childlib7component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component43 />);
    expect(baseElement).toBeTruthy();
  });
});
