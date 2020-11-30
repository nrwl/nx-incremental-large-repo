import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component48 from './lib2childlib2component48';

describe('Lib2childlib2component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component48 />);
    expect(baseElement).toBeTruthy();
  });
});
