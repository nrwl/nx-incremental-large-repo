import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component37 from './lib2childlib2component37';

describe('Lib2childlib2component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component37 />);
    expect(baseElement).toBeTruthy();
  });
});
