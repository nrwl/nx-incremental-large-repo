import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component5 from './lib2childlib2component5';

describe('Lib2childlib2component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component5 />);
    expect(baseElement).toBeTruthy();
  });
});
