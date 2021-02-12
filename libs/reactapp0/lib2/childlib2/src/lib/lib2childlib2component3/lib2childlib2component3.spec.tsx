import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component3 from './lib2childlib2component3';

describe('Lib2childlib2component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component3 />);
    expect(baseElement).toBeTruthy();
  });
});
