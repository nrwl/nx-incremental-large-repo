import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component0 from './lib2childlib2component0';

describe('Lib2childlib2component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component0 />);
    expect(baseElement).toBeTruthy();
  });
});
