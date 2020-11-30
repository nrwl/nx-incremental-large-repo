import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component25 from './lib2childlib7component25';

describe('Lib2childlib7component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component25 />);
    expect(baseElement).toBeTruthy();
  });
});
