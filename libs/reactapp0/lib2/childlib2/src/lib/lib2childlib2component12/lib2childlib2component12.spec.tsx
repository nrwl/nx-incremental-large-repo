import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component12 from './lib2childlib2component12';

describe('Lib2childlib2component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component12 />);
    expect(baseElement).toBeTruthy();
  });
});
