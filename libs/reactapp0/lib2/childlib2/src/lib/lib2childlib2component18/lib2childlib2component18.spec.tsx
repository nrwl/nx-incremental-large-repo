import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component18 from './lib2childlib2component18';

describe('Lib2childlib2component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component18 />);
    expect(baseElement).toBeTruthy();
  });
});
