import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component44 from './lib2childlib2component44';

describe('Lib2childlib2component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component44 />);
    expect(baseElement).toBeTruthy();
  });
});
