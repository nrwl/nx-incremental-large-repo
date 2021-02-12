import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component4 from './lib2childlib7component4';

describe('Lib2childlib7component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component4 />);
    expect(baseElement).toBeTruthy();
  });
});
